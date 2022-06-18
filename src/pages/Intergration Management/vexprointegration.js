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

class VexproIntegration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "VExpro", link : "#" },
                
            ],
            modal_standard: false,
            modal_large: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_large = this.tog_large.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("VExpro Integration", this.state.breadcrumbItems);
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
                    label: 'Api Key',
                    field: 'apikey',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Api Password',
                    field: 'apipass',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Storefront access Token',
                    field: 'sftoken',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Shared Secret',
                    field: 'sharedsecret',
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
                    surl: 'https://abc-shop.myshopify.com',
                    apikey: '7bcc5a61440d274979e7da825088a850',
                    apipass: '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',
                    sftoken: '26a26117e1ddec892d29bd6e696fd6ac',
                    sharedsecret: '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',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '2',
                    username: 'Kinjall',
                    email: 'kinjal@gmail.com',
                    sname: 'Kinjal-Shop',
                    surl: 'https://kinjal-shop.myshopify.com',
                    apikey: '7bcc5a61440d274979e7da825088a850',
                    apipass: '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',
                    sftoken: '26a26117e1ddec892d29bd6e696fd6ac',
                    sharedsecret: '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',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '3',
                    username: 'Atul',
                    email: 'atul@gmail.com',
                    sname: 'Atul-Shop',
                    surl: 'https://atull-shop.myshopify.com',
                    apikey: '7bcc5a61440d274979e7da825088a850',
                    apipass: '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',
                    sftoken: '26a26117e1ddec892d29bd6e696fd6ac',
                    sharedsecret: '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',
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
                                            <Input className="form-control" type="text" defaultValue="ABC-Shop" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Shop URL</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="https://abc-shop.myshopify.com" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Api Key</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="7bcc5a61440d274979e7da825088a850" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Api Password</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="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" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Storefront access Token</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="26a26117e1ddec892d29bd6e696fd6ac" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Shared Secret</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="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" id="example-url-input"/>
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

export default connect(null, { setBreadcrumbItems })(VexproIntegration);
