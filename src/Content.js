import React from 'react';
import Project from './Project'
import request from 'superagent/lib/client';
import {Grid, Row, Col} from 'react-bootstrap';
export default class Content extends React.Component{

    constructor(){
        super();
        this.state = {
            projects: [],
            search: false,
        };
        this.getProjects = this.getProjects.bind(this);
        this.searchOrNotSearch();
        // this.getProjects();
    }

    searchOrNotSearch(){
        const {search} = this.state;
        if(search)this.getProjectsWithSearch();
        else this.getProjects();
    }

    getProjects(){
        request.get('http://localhost:23000/api/projects')
            .end((err, response) => {
                if(err){
                    console.error("Get all projects : ", err);
                }
                if(response.status == 200){
                    this.setState({projects: response.body});
                    console.log(response.body);
                }else{
                    console.log("Error while retrieving all projects. Please check your connection or the back-end server.");
                }
            })
    }

    getProjectsWithSearch(){
        request.get('http://localhost:23000/api/projects/search')
            .end((err, response) => {
                if(err){
                    console.error("Get projects : ", err);
                }
                if(response.status == 200){
                    this.setState({projects: response.body});
                    console.log(response.body);
                }else{
                    console.log("Error while retrieving projects. Please check your connection or the back-end server.");
                }
            })
    }

    render(){
        return(
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        {this.state.projects.map((project) => <Project project={project} />)}
                    </Col>
                </Row>
            </Grid>
        );
    }
}