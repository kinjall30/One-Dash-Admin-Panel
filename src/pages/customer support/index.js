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
    Table
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
            tickets: []
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Customer Service", this.state.breadcrumbItems);
       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/support/log", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                tickets: result.body
            })
            console.log(result.body)
            console.log("hello")
        })
        .catch(error => console.log('error', error));
    }
  
    render() {
        const {tickets} = this.state
        console.log(tickets)
        // this.viewSupportLog()
        return (
            <React.Fragment>
                <Row> 
                    <Col md='3' >
                        <Card className="mini-stat" style={{backgroundColor: "#f5b225"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>Unsolved</h5>
                                <h5>10</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#58db83"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>OverDue</h5>
                                <h5>2</h5>
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
                                <h5>1</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#f1734f"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                        
                                <h5>Onhold</h5>
                                <h5>5</h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>   
                 <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table table-hover table-bordered  mb-0">
                                        <thead>
                                            <tr>
                                                <th>Ticket Name</th>
                                                <th>Ticket Description</th>
                                                <th>Status</th>
                                                <th>Priority</th>
                                                <th>Category</th>
                                                <th>Created At</th>
                                                <th>updated At</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                          {
                                            tickets.map((ticket) => (
                                                <tr>
                                                    <td> {ticket.ticket_name} </td>
                                                    <td> {ticket.ticket_description} </td>
                                                    <td> {ticket.ticket_status} </td>
                                                    <td> {ticket.priority_name} </td>
                                                    <td> {ticket.category_name} </td>
                                                    <td> {ticket.created_at} </td>
                                                    <td> {ticket.updated_at} </td>
                                                    <td><Link to="customercomplain"><Button type="button" style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button> </Link></td>
                                                </tr>
                                            ))
                                          }
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CustomerService);