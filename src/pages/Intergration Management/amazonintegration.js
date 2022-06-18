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

class AmazonIntegration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Amazon", link : "#" },
                
            ],
            modal_standard: false,
            modal_large: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_large = this.tog_large.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Amazon Integration", this.state.breadcrumbItems);
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
                    label: 'Marketplace',
                    field: 'marplace',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Associate Tag',
                    field: 'asstag',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Access Key',
                    field: 'accesskey',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Secret Key',
                    field: 'secretkey',
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
                    marplace: 'www.amazon.com',
                    asstag: 'www.amazon.co.uk',
                    accesskey: 'futurepublish-21',
                    secretkey: 'ZXB+XcaXHxcktv1m5dl7NTRtWEiV7+CKWuEFBN0Z',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '2',
                    username: 'Kinjall',
                    email: 'kinjal@gmail.com',
                    sname: 'Kinjal-Shop',
                    marplace: 'www.amazon.com',
                    asstag: 'www.amazon.co.uk',
                    accesskey: 'futurepublish-21',
                    secretkey: 'ZXB+XcaXHxcktv1m5dl7NTRtWEiV7+CKWuEFBN0Z',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '3',
                    username: 'Atul',
                    email: 'atul@gmail.com',
                    sname: 'Atul-Shop',
                    marplace: 'www.amazon.com',
                    asstag: 'www.amazon.co.uk',
                    accesskey: 'futurepublish-21',
                    secretkey: 'ZXB+XcaXHxcktv1m5dl7NTRtWEiV7+CKWuEFBN0Z',
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
                                            <Input className="form-control" type="text" defaultValue="Abc-Shop" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Marketplace</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="www.amazon.com" id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                    <Label for="example-tel-input" className="col-sm-2 col-form-label">Associate Tag</Label>
                                    <Col sm="10">
                                        <Input className="form-control" type="text" defaultValue="www.amazon.co.uk" id="example-search-input"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="example-tel-input" className="col-sm-2 col-form-label">Access Key</Label>
                                    <Col sm="10">
                                        <Input className="form-control" type="text" defaultValue="futurepublish-21" id="example-search-input"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Secret Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" defaultValue="ZXB+XcaXHxcktv1m5dl7NTRtWEiV7+CKWuEFBN0Z"  id="example-search-input"/>
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

export default connect(null, { setBreadcrumbItems })(AmazonIntegration);
