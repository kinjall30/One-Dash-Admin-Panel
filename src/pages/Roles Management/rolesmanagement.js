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

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { MDBDataTable } from 'mdbreact';

class Rolesmanagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Roles Management", link : "#" },
            ],
            modal_edit: false,
            modal_add: false,
        }
        this.tog_edit = this.tog_edit.bind(this);
        this.tog_add = this.tog_add.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Roles Management", this.state.breadcrumbItems);
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
                  {/*  <h4 className="card-title" >Permission Details</h4> */}
                <div style={{marginTop: 20, marginBottom: 30}}>
                    <Button type="button" onClick={this.tog_add} color="info"  className="waves-effect waves-light">Add Roles</Button>
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
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                <th>Email</th>
                                                <th>Phone No.</th>
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
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>mark@gmail.com</td>
                                                <td>+91 6547891587</td>
                                                <td>mark@123</td>
                                                <td>Admin</td>
                                                <td>Active</td>
                                                <td>12th June 2021</td>
                                                <td>15th June 2021</td>
                                                <td>
                                                    <Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>
                                                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>jacob@gmail.com</td>
                                                <td>+91 6542311587</td>
                                                <td>jacob@123</td>
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
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>larry@gmail.com</td>
                                                <td>+91 5478918997</td>
                                                <td>larry@123</td>
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
                                <Label for="example-text-input" className="col-sm-2 col-form-label">ID</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="number"  id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Firstname</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Lastname</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Username</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="email"  id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Phone Number</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="number"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="password"  id="example-url-input"/>
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
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Created At</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="date"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Updated At</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="date"  id="example-url-input"/>
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
                                <Label for="example-text-input" className="col-sm-2 col-form-label">ID</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="number"  id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Firstname</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Lastname</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Username</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text"  id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="email"  id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Phone Number</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="number"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="password"  id="example-url-input"/>
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
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Created At</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="date"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Updated At</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="date"  id="example-url-input"/>
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

export default connect(null, { setBreadcrumbItems })(Rolesmanagement);
