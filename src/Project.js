import React from 'react';
import {Thumbnail, Col, Button } from 'react-bootstrap';

export default class Project extends React.Component {
    render(){
        console.log(this.props.title);
        return(
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail>
                        <h3>{this.props.project.title}</h3>
                        <p>{this.props.project.description}</p>
                        <p>
                        {this.props.project.tags.map((value) => (
                            <Button>{value}</Button>
                        ))}
                        </p>
                    </Thumbnail>
                </Col>
            </div>
        );
    }

}