import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    TabContent,
    TabPane,
    Collapse,
    NavLink,
    NavItem,
    Nav,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Table,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import { MDBDataTable } from 'mdbreact';

import DountChart from "../AllCharts/chartjs/dountchart";
import LineChart from "../AllCharts/chartjs/linechart";

import img from "../../assets/images/img1.jpg"
import Subscriptionreport from "./report"

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Subcription", link : "#" },
               
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Subscription", this.state.breadcrumbItems);
    }

    
   
    
  
    render() {

        return (
            <React.Fragment>
            
                    <h1>Subscription Details</h1>
                   
                    <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table table-hover   mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Firstname</th>
                                                <th>Lastname</th>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Kinjal</td>
                                                <td>Prajapati</td>
                                                <td>kinjall</td>
                                                <td>kinjal@gmail.com</td>
                                                <td>
                                                    <Link to="usersubscription"> <Button type="button" style = {{marginRight: 10,}} color="primary" className="waves-effect waves-light">Details</Button></Link>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Atul</td>
                                                <td>Shah</td>
                                                <td>atulsh</td>
                                                <td>atul@gmail.com</td>
                                                <td>
                                                    <Link to="usersubscription"> <Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Details</Button> </Link>                                          
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Margi</td> 
                                                <td>Patel</td> 
                                                <td>margiP</td>
                                                <td>margi@gmail.com</td>                                      
                                                <td>
                                                    <Link to="usersubscription"><Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Details</Button></Link>
                                                </td>
                                            </tr>
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

export default connect(null, { setBreadcrumbItems })(Subscription);