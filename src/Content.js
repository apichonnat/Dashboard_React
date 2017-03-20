import React from 'react';
import Project from './Project'
import request from 'superagent/lib/client';
import {Grid, Row, Col, Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
export default class Content extends React.Component{

    constructor(){
        super();
        this.state = {
            projects: [],
            search: false,
        };
        this.getProjects = this.getProjects.bind(this);
        this.getProjects();
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

    render(){
        if(this.props.logged){
            return(
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <Navbar.Form pullLeft>
                                <FormGroup>
                                    <FormControl type="text" onChange={this.search} placeholder="Search" />
                                </FormGroup>
                                {' '}
                                <Button type="submit">Submit</Button>
                            </Navbar.Form>
                        </Col>
                        <Col xs={12} md={12}>
                            {this.state.projects.map((project) => <Project project={project}/>)}
                        </Col>
                    </Row>
                </Grid>

            );
        }else{
            return(
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <p>Vous devez être connecté pour pouvoir voir les projets</p>
                        </Col>
                    </Row>
                </Grid>
            );
        }

    }
}