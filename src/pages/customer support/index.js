import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    TabContent,
    TabPane,
    FormGroup,
    Input,
    Label,
    Collapse,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import { MDBDataTable } from 'mdbreact';

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class CustomerService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Customer", link : "#" },
                { title : "Service", link : "#" },
            ],
            modal_standard: false, 
        }
        this.tog_standard = this.tog_standard.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Customer Service", this.state.breadcrumbItems);
    }

    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }
  
    render() {
        const data = {
            columns: [
                {
                    label: 'Priority',
                    field: 'priority',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Ticket Key',
                    field: 'tkey',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Ticket Name',
                    field: 'tname',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Created',
                    field: 'created',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Owners Name',
                    field: 'oname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: '',
                    field: 'buttons',
                    sort: 'but',
                    width: 250
                },
            ],rows: [
                {
                    priority: 'Urgent',
                    tkey: 'T-12356',
                    tname: 'Need Help with Downloading',
                    created: '10th May 2022',
                    oname: 'Kinjal Prajapati',
                    buttons: [ <Button type="button" onClick={this.tog_standard} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
                    ],
                   
                },
                {
                    priority: 'Urgent',
                    tkey: 'T-85974',
                    tname: 'Update Email',
                    created: '9th May 2022',
                    oname: 'Atul Shah',
                    buttons: [ <Button type="button" onClick={this.tog_standard} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
                    ],
                   
                },
                {
                    priority: 'On hold',
                    tkey: 'T-25478',
                    tname: 'Billing needs update',
                    created: '8th May 2022',
                    oname: 'Shivani Patel',
                    buttons: [ <Button type="button" onClick={this.tog_standard} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
                    ],
                   
                },
            ]
        }

        return (
            <React.Fragment>
                <Row> 
                    <Col md='3' >
                        <Card className="mini-stat" style={{backgroundColor: "#f5b225"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>Unsolved</h5>
                                <h5>50</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#58db83"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>OverDue</h5>
                                <h5>10</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#29bbe3"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                                
                                <h5>Due Today</h5>
                                <p>                       </p>
                                <h5>5</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#e83e8c"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                        
                                <h5>Open</h5>
                                <h5>60</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#f1734f"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                        
                                <h5>Onhold</h5>
                                <h5>50</h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>   
                
                <Row lg="12">
                        <Col lg = "12">
                                <MDBDataTable
                                responsive
                                btn
                                hover
                                bordered
                                data={data}
                                />
                        </Col>
                    </Row> 

                    <Row>
                        <Modal
                            isOpen={this.state.modal_standard}
                            toggle={this.tog_standard}
                            autoFocus={true}
                            size = "lg"
                        >
                            <ModalHeader toggle={this.tog_standard}>
                                Details
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <h4>Problem: Email Change</h4>
                                    <p></p>
                                    <h6>Description:</h6>
                                    <p>Couldn't change the email. My current email is abc@gmail.com i want to change that to pqr@gmail.com</p>
                                </div>
                                <div>
                                    <FormGroup row>
                                        <Label className="col-sm-2 col-form-label">Person in charge</Label>
                                        <Col sm="10">
                                            <select className="form-control">
                                                <option>Select</option>
                                                <option>Atik Khan</option>
                                                <option>Kinjal Prajapati</option>
                                            </select>
                                        </Col>
                                    </FormGroup>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                    <Button type="button" color="primary" className="waves-effect" onClick={this.tog_standard}>Solved</Button>
                                    <Button type="button" color="primary" className="waves-effect waves-light">On Hold</Button>
                            </ModalFooter>   
                        
                        </Modal>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CustomerService);