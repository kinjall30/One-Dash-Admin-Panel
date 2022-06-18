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

class StripeIntegration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Stripe", link : "#" },
                
            ],
            modal_standard: false,
            modal_large: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_large = this.tog_large.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Stripe Integration", this.state.breadcrumbItems);
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
                    label: 'Secret Key',
                    field: 'skey',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Publishable Key',
                    field: 'pkey',
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
                    skey: 'kjya26adh',
                    pkey: 'pk_test_Xg1wD3wh0r3IkpZRoy9A8fUN',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '2',
                    username: 'Kinjall',
                    email: 'kinjal@gmail.com',
                    skey: 'bSGMB65laj',
                    pkey: 'pk_test_Xg1wD3wh0r3IkpZRoy9A8fUN',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    customerid: '3',
                    username: 'Atil',
                    email: 'atik@gmail.com',
                    skey: 'fjeha326ANH',
                    pkey: 'pk_test_Xg1wD3wh0r3IkpZRoy9A8fUN',
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
                                            <Input className="form-control" type="email" defaultValue="abc@gmail.com"  id="example-email-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Secret Key</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="kjya26adh"  id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Publishable Key</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" defaultValue="pk_test_Xg1wD3wh0r3IkpZRoy9A8fUN" id="example-search-input"/>
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

export default connect(null, { setBreadcrumbItems })(StripeIntegration);
