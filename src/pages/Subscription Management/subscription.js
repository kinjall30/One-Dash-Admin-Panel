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
                { title : "Report", link : "#" },
            ],
            modal_standard: false,
            modal_large: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_large = this.tog_large.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Subscription", this.state.breadcrumbItems);
    }

    
    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }
    
       
    tog_large() {
        this.setState(prevState => ({
          modal_large: !prevState.modal_large
        }));
    }
    
  
    render() {

        const data = {
            columns: [
                {
                    label: 'Customer Id',
                    field: 'customerid',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Username',
                    field: 'username',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Subscribe',
                    field: 'subscribe',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Plan',
                    field: 'plan',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Which Plan',
                    field: 'innerplan',
                    sort: 'asc',
                    width: 100
                },
                {
                  label: 'Start Date',
                  field: 'startdate',
                  sort: 'asc',
                  width: 100
              },
              {
                label: 'End Date',
                field: 'enddate',
                sort: 'asc',
                width: 100
              },
                {
                    label: '',
                    field: 'buttons',
                    sort: 'but',
                    width: 250
                },
            ],rows: [
                {
                    customerid: '1',
                    username: 'TigerNixon',
                    email: 'abc@gmail.com',
                    subscribe: 'Subscribed',
                    plan: 'Monthly',
                    innerplan: 'Unlimited',
                    startdate: '1/1/2022',
                    enddate: '1/2/2022',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                  customerid: '2',
                  username: 'AtikK',
                  email: 'atik@gmail.com',
                  subscribe: 'Subscribed',
                  plan: 'Monthly',
                  innerplan: 'Unlimited',
                  startdate: '1/1/2022',
                  enddate: '1/2/2022',
                  buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                  <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                  ],
                 
              },
              {
                customerid: '3',
                username: 'KinjalP',
                email: 'kinjal@gmail.com',
                subscribe: 'Subscribed',
                plan: 'Monthly',
                innerplan: 'Unlimited',
                startdate: '1/1/2022',
                enddate: '1/2/2022',
                buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"  data-toggle="modal" data-target="#myModal"><i className="ti-pencil"></i></Button>, 
                <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                ],
               
            },
            {
              customerid: '4',
              username: 'Masud',
              email: 'masud@gmail.com',
              subscribe: 'Subscribed',
              plan: 'Monthly',
              innerplan: 'Unlimited',
              startdate: '1/1/2022',
              enddate: '1/2/2022',
              buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"  data-toggle="modal" data-target="#myModal"><i className="ti-pencil"></i></Button>, 
              <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
              ],
             
          },
          {
            customerid: '5',
            username: 'Mital',
            email: 'mital@gmail.com',
            subscribe: 'Subscribed',
            plan: 'Monthly',
            innerplan: 'Unlimited',
            startdate: '1/1/2022',
            enddate: '1/2/2022',
            buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"  data-toggle="modal" data-target="#myModal"><i className="ti-pencil"></i></Button>, 
            <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
            ],
           
        },{
          customerid: '6',
          username: 'Parth',
          email: 'parth@gmail.com',
          subscribe: 'Subscribed',
          plan: 'Monthly',
          innerplan: 'Unlimited',
          startdate: '1/1/2022',
          enddate: '1/2/2022',
          buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"  data-toggle="modal" data-target="#myModal"><i className="ti-pencil"></i></Button>, 
          <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
          ],
         
      },
            ]
        };
        

        return (
            <React.Fragment>
            
                    <h1>Subscription Details</h1>
                    <Button type="button"  onClick={this.tog_large} color="info" className="waves-effect waves-light">Add Subscription</Button>
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
                            isOpen={this.state.modal_large}
                            toggle={this.tog_large}
                            autoFocus={true}
                            size = "lg"
                        >
                            <ModalHeader toggle={this.tog_large}>
                                Fill Details
                            </ModalHeader>
                            <ModalBody>
                                    <FormGroup row>
                                        <Label for="example-text-input" className="col-sm-2 col-form-label">Customer Id</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="number"  id="example-text-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-search-input" className="col-sm-2 col-form-label">Username</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="search" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-email-input" className="col-sm-2 col-form-label">Email</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="email"  id="example-email-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Plan</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text"  id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Which Plan</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text"  id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-password-input" className="col-sm-2 col-form-label">Start Date</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="datetime-local" id="example-datetime-local-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-password-input" className="col-sm-2 col-form-label">End Date</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="datetime-local" id="example-datetime-local-input"/>
                                        </Col>
                                    </FormGroup>                      
                            </ModalBody>
                            <ModalFooter>
                                    <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                    <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                                </ModalFooter>                      
                        </Modal>
                    </Row>
                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Subscription);