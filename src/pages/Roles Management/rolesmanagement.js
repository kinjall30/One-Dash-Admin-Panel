import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Modal,
  Table,
  ModalHeader,
  ModalBody,
  ModalFooter,
    Input,
} from "reactstrap";
import { connect } from "react-redux";

import SweetAlert from "react-bootstrap-sweetalert";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class Rolesmanagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Users", link : "#" },
            ],
            modal_edit: false,
            modal_add: false,
            success_confirm : false,
            alert_confirm : false,
            hidden: true,
            password: '', 
        }
        this.tog_edit = this.tog_edit.bind(this);
        this.tog_add = this.tog_add.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Portal Users", this.state.breadcrumbItems);
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
      }
    
      toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }

    tog_edit() {
        this.setState(prevState => ({
          modal_edit: !prevState.modal_edit
        }));
    }
    tog_add() {
        this.setState(prevState => ({
          modal_add: !prevState.modal_add
        }));
    }

    render() {

        const data = {
            columns: [
                {
                    label: 'Firstname',
                    field: 'firstname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Middlename',
                    field: 'middlename',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Lastname',
                    field: 'lastname',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Phone Number',
                    field: 'phn',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Role',
                    field: 'role',
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
                    firstname: 'kinjal',
                    middlename: 'N.',
                    lastname: 'prajapati',
                    phn: '4152639874',
                    email: 'prajapati@gmail.com',
                    role: 'admin',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
            ]
        };
        return (
            <React.Fragment>
                {
                    this.state.success_confirm ? (
                        <SweetAlert
                        success
                        title={this.state.dynamic_title}
                        confirmBtnBsStyle="success"
                        cancelBtnBsStyle="danger"
                        onConfirm={() => this.setState({ success_confirm: false, alert_confirm : false })}
                        >
                            {this.state.dynamic_description}
                        </SweetAlert>
                    )
                    : null
                }
                  {/*  <h4 className="card-title" >Permission Details</h4> */}
                <div style={{marginTop: 20, marginBottom: 30}}>
                    <Button type="button" onClick={this.tog_add} color="info"  className="waves-effect waves-light"><i className="ion ion-md-person-add" style={{marginRight: 10}}></i>Add User</Button>
                </div>
                {/* 
                <Row lg="12"> 
                    <Col lg = "12">
                        <Button type="button"  onClick={this.tog_standard} color="info" className="waves-effect waves-light">Add Roles</Button>
                        <MDBDataTable
                            responsive
                            btn
                            hover
                            bordered
                            data={data}
                        />
                    </Col>
                </Row> 
                */}

                {/* Table */}
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table table-hover table-bordered  mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Password</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <th>Created At</th>
                                                <th>updated At</th>
                                                <th>Buttons</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>mark@gmail.com</td>
                                                <td>{this.state.hidden ? '*********' : 'text'}</td>
                                                <td>Admin</td>
                                                <td>Active</td>
                                                <td>12th June 2021</td>
                                                <td>15th June 2021</td>
                                                <td>
                                                    <Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>
                                                    <Button type="button" onClick={() => this.setState({ alert_confirm: true })} color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>
                                                    {this.state.alert_confirm ? (
                                                        <SweetAlert
                                                        title="Are you sure you want to delete this user?"
                                                        warning
                                                        showCancel
                                                        confirmBtnBsStyle="success"
                                                        cancelBtnBsStyle="danger"
                                                        onConfirm={() =>
                                                            this.setState({
                                                            success_confirm: true,
                                                            alert_confirm : false,
                                                            dynamic_title: "Deleted!",
                                                            dynamic_description: "This user has been deleted."
                                                            })
                                                        }
                                                        onCancel={() =>
                                                            this.setState({
                                                                alert_confirm: false,
                                                            })
                                                        }
                                                        >
                                                        You won't be able to revert this!
                                                        </SweetAlert>
                                                    ) : null}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>jacob@gmail.com</td>
                                                <td>{this.state.hidden ? '*********' : 'text'}</td>
                                                <td>Support</td>
                                                <td>Active</td>
                                                <td>12th June 2021</td>
                                                <td>15th June 2021</td>
                                                <td>
                                                    <Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>
                                                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>larry@gmail.com</td>
                                                <td>{this.state.hidden ? '*********' : 'text'}</td>
                                                <td>Marketing</td>
                                                <td>Inactive</td>
                                                <td>12th June 2021</td>
                                                <td>15th June 2021</td>
                                                <td>
                                                    <Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>
                                                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                {/* Editing Form */}
                <Row>     
                    <Modal
                        isOpen={this.state.modal_edit}
                        toggle={this.tog_edit}
                        autoFocus={true}
                        size = "lg"
                    >
                        <ModalHeader toggle={this.tog_edit}>
                           Edit Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" defaultValue="Mark"  id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="email" defaultValue="mark@gmail.com"  id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="password" defaultValue="mark@123"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Role</Label>
                                <Col sm="10">
                                    <select className="form-control">
                                      
                                        <option>Admin</option>
                                        <option>Support</option>
                                        <option>Marketing</option>
                                    </select>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control">
                                       
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>                        
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                            <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>                      
                    </Modal>
                </Row>

                {/* Adding new role form */}
                <Row>     
                    <Modal
                        isOpen={this.state.modal_add}
                        toggle={this.tog_add}
                        autoFocus={true}
                        size = "lg"
                    >
                        <ModalHeader toggle={this.tog_add}>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" defaultValue=" " type="email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="password" defaultValue=" " id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Role</Label>
                                <Col sm="10">
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Admin</option>
                                        <option>Support</option>
                                        <option>Marketing</option>
                                    </select>
                                </Col>
                            </FormGroup> 
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                            <Button type="button" color="primary" className="waves-effect waves-light">Add User</Button>
                        </ModalFooter>                      
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Rolesmanagement);
