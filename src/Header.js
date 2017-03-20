import React from 'react';
import NewProject from './NewProject';
import { Navbar, Nav, NavItem, FormControl, FormGroup, Button, Form } from 'react-bootstrap';

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            user: '',
            pwd: '',
            role: '',
            authenticate: false,
            lgShow: false
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangeLogin(event) {
        this.setState({user: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({pwd: event.target.value});
    }

    isLogged(){
        if(!this.props.logged){
            return (
                <Form>
                    <FormGroup>
                        <FormControl onChange={this.handleChangeLogin} name="userName" type="text" placeholder="login" />
                        {' '}
                        <FormControl onChange={this.handleChangePassword} name="password" type="password" placeholder="password" />
                    </FormGroup>
                    {' '}
                    <Button type="button" onClick={()=>{this.props.login(this.state.user, this.state.pwd)}}>login</Button>
                </Form>
            );
        }else{
            return (
                <Form>
                    <Button type="button" onClick={()=>{this.props.logout()}}>Logout</Button>
                </Form>
            );
        }
    }
    render(){
        let lgClose = () => this.setState({ lgShow: false });
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Dashboard</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.props.logged &&
                        <Nav>
                            <NavItem eventKey={1} onClick={()=>this.setState({ lgShow: true })}>New Project</NavItem>
                            <NewProject show={this.state.lgShow} onHide={lgClose} />
                            <NavItem eventKey={2} >New User</NavItem>
                        </Nav>
                    }
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