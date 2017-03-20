import React from 'react';
import { Modal, h4, Button, Form, FieldGroup, FormControl, FormGroup, ControlLabel, Grid, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';

export default class Header extends React.Component{
    newProject(){

    }

    render() {
        return (
            <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Nouveau projet</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Grid>
                        <Form>
                            <Row className="show-grid">
                                <Col xs={9} md={9}>
                                    <ControlLabel>Titre</ControlLabel>
                                    <FormControl type="text" placeholder="Titre"/>

                                    <ControlLabel>Description</ControlLabel>
                                    <FormControl componentClass="textarea"/>

                                    <FormGroup controlId="formControlsSelectMultiple">
                                        <ControlLabel>Multiple select</ControlLabel>
                                        <FormControl componentClass="select" multiple>
                                            <option value="PHP">PHP</option>
                                            <option value="Ruby">Ruby</option>
                                            <option value="Js">Js</option>
                                            <option value="C#">C#</option>
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={4}>
                                    <FormGroup>
                                        <ControlLabel>Date de fin</ControlLabel>
                                        <DatePicker id="dateEnd"/>
                                        <ControlLabel>Date de début</ControlLabel>
                                        <DatePicker id="dateEnd"/>
                                    </FormGroup>
                                </Col>
                                <Col xs={5} md={5}>
                                    <FormGroup>
                                        <ControlLabel>Date de fin</ControlLabel>
                                        <DatePicker id="dateEnd"/>
                                        <ControlLabel>Date de début</ControlLabel>
                                        <DatePicker id="dateEnd"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button type="submit" onclick={()=>{this.newProject()}}>Submit</Button>
                        </Form>
                    </Grid>

                </Modal.Body>

            </Modal>
        );
    }


}



