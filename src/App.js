import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Authenticate from './Authenticate'
import './App.css';

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            logged: false
        };
        this.authenticate = new Authenticate();
    }

    login(user, pwd){
        this.authenticate.login(user, pwd).then(()=>{
            this.setState({logged: true});
        });
    }

    logout(){
        this.authenticate.logout();
        this.setState({logged: false});
    }

    render() {
        return (
            <div>
                <Header login={this.login.bind(this)} logout={this.logout.bind(this)} logged={this.state.logged} />
                <Content logged={this.state.logged}/>
            </div>
        );
    }
}
