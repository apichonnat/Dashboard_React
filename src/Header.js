import React from 'react';
import request from 'superagent/lib/client';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, FormGroup, Button, Form } from 'react-bootstrap';

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            user: '',
            pwd: '',
            role: '',
            authenticate: false
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    logout(){
        this.setState({authenticate: false});
        localStorage.removeItem("token");
    }

    handleChangeLogin(event) {
        this.setState({user: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({pwd: event.target.value});
    }

    login(){
        request
            .post('http://localhost:23000/api/auth')
            .send({username: this.state.user, password: this.state.pwd})
            .end((err, response) => {
                console.log(err);
                if(err){
                    alert("un problème lors de la connection est survenue");
                    console.error("Connection impossible : ", err);
                }
                if(response.status == 200){
                    this.setState({authenticate: true});
                    this.setState({role: response.body.role})
                    localStorage.setItem("token", response.text);
                    console.log(response);
                }else{
                    console.log("Error");
                }
            });
    }
    isLogged(){
        console.log(this.state.authenticate);
        if(this.state.authenticate == false){
            return (
                <Form>
                    <FormGroup>
                        <FormControl onChange={this.handleChangeLogin} name="userName" type="text" placeholder="login" />
                        {' '}
                        <FormControl onChange={this.handleChangePassword} name="password" type="password" placeholder="password" />
                    </FormGroup>
                    {' '}
                    <Button type="button" onClick={this.login}>login</Button>
                </Form>
            );
        }else{
            return (
                <Form>
                    <Button type="button" onClick={this.logout}>Logout</Button>
                </Form>
            );
        }
    }
    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Dashboard</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <Navbar.Form pullLeft>
                            {this.isLogged()}
                        </Navbar.Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}