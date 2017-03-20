import React from 'react';
import request from 'superagent/lib/client';

export default class Authenticate {

    login(user, pwd){
        return new Promise((resolve, reject)=> {
            request
                .post('http://localhost:23000/api/auth')
                .send({username: user, password: pwd})
                .end((err, response) => {
                    if(err){
                        return reject(err);
                    }
                    if(response.status == 200){
                        localStorage.setItem("role", response.body.role);
                        localStorage.setItem("token", response.text);
                        return resolve();
                    }else{
                        console.log("Error");
                    }
                });
        });
    }

    logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    isAuthenticate(){
        return localStorage.getItem("token") == null ? false : true;
    }
}