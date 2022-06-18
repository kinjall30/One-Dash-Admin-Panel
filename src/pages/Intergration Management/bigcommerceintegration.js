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
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";

import { MDBDataTable } from 'mdbreact';

class BigCommerceIntegration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "BigCommerce", link : "#" },
                
            ],
            modal_standard: false,
            modal_large: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_large = this.tog_large.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("BigCommerce Integration", this.state.breadcrumbItems);
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
                    label: 'Shope Name',
                    field: 'sname',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Shop URL',
                    field: 'surl',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Client Id',
                    field: 'clientid',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Client Secret',
                    field: 'clientsecret',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Api Path',
                    field: 'apipath',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Access Token',
                    field: 'accesstoken',
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
                    customerid: '1',
                    username: 'TigerNixon',
                    email: 'abc@gmail.com',
                    sname: 'ABC-Shop',
                    surl: 'https://vexprotech.mybigcommerce.com',
                    clientid: 'nbtkbsiyadpr0oih62r64ret8mjfgku',
                    clientsecret: 'f2c949a87c1030678c4e2f378e70aef0c4b566eb0d063da6c0dffa65d9718e1e',
                    apipath: 'https://api.bigcommerce.com/stores/2jorn8rp6m',
                    accesstoken: 'dexj0cqdx1mn4tj7td8otuazlhxhkg0',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '2',
                    username: 'Kinjall',
                    email: 'kinjal@gmail.com',
                    sname: 'Kinjal-Shop',
                    surl: 'https://vexprotech.kinjalstore.com',
                    clientid: 'nbtkbsiyadpr0oih62r64ret8mjfgku',
                    clientsecret: 'f2c949a87c1030678c4e2f378e70aef0c4b566eb0d063da6c0dffa65d9718e1e',
                    apipath: 'https://api.bigcommerce.com/stores/2jorn8rp6m',
                    accesstoken: 'dexj0cqdx1mn4tj7td8otuazlhxhkg0',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '3',
                    username: 'Shivani',
                    email: 'shivani@gmail.com',
                    sname: 'Shivani-Shop',
                    surl: 'https://vexprotech.shivanistore.com',
                    clientid: 'nbtkbsiyadpr0oih62r64ret8mjfgku',
                    clientsecret: 'f2c949a87c1030678c4e2f378e70aef0c4b566eb0d063da6c0dffa65d9718e1e',
                    apipath: 'https://api.bigcommerce.com/stores/2jorn8rp6m',
                    accesstoken: 'dexj0cqdx1mn4tj7td8otuazlhxhkg0',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
            ]
        }
        return (
            <React.Fragment>
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
                                            <Input className="form-control" type="number" defaultValue="1" id="example-text-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-search-input" className="col-sm-2 col-form-label">Username</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="search" defaultValue="TigerNixon" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-email-input" className="col-sm-2 col-form-label">Email</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="email" defaultValue="abc@gmail.com" id="example-email-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Shop Name</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="ABC-Shop"  id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Shop URL</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="https://vexprotech.mybigcommerce.com	" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Client Id</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="nbtkbsiyadpr0oih62r64ret8mjfgku"  id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Client Secret</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="f2c949a87c1030678c4e2f378e70aef0c4b566eb0d063da6c0dffa65d9718e1e"  id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Api Path</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="https://api.bigcommerce.com/stores/2jorn8rp6m	" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Access Token</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="dexj0cqdx1mn4tj7td8otuazlhxhkg0" id="example-search-input"/>
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

export default connect(null, { setBreadcrumbItems })(BigCommerceIntegration);
