import React from 'react';
import request from 'superagent';

export default class FormConnect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        // $.ajax({
        //     url: "http://localhost:23000/api/user",
        //     type: 'post',
        //     data:{
        //         access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliNmY4MmFkLWJiNTItNGExMC05NmRlLTY1YTcyYmUwOGM1YyIsInVzZXJuYW1lIjoiQWxhaW4iLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJyb2xlIjoiUHJvamVjdCBtYW5hZ2VyIiwiZW1haWwiOm51bGwsImlhdCI6MTQ4ODE4NDU0OSwiZXhwIjoxNDg4MzI4NTQ5fQ.1bvKCFHdGEO6Oc54w9DYLu-tMX_r4wSLQbsgS6t-DNo',
        //         username: event.target.username.value,
        //         password: event.target.password.value,
        //         role: event.target.role.value
        //     },
        //     dataType:'json',
        //     success: function(data){
        //         console.log(data)
        //     }
        // });

        request.post('http://localhost:23000/api/user')
            .query({
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliNmY4MmFkLWJiNTItNGExMC05NmRlLTY1YTcyYmUwOGM1YyIsInVzZXJuYW1lIjoiQWxhaW4iLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJyb2xlIjoiUHJvamVjdCBtYW5hZ2VyIiwiZW1haWwiOm51bGwsImlhdCI6MTQ4ODE4NDU0OSwiZXhwIjoxNDg4MzI4NTQ5fQ.1bvKCFHdGEO6Oc54w9DYLu-tMX_r4wSLQbsgS6t-DNo',
                username: event.target.username.value,
                password: event.target.password.value,
                role: event.target.role.value
            })
            .end(function(err, res){
                console.log(err, res);
            });


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <label>Name :</label>
                    <input name="username" type="text" onChange={this.handleChange} /><br/><br/>
                    <label>Password :</label>
                    <input name="password" type="password" onChange={this.handleChange} /><br/><br/>
                    <label>Role :</label>
                    <input name="role" type="text" value="Project Manager" onChange={this.handleChange} /><br/><br/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}