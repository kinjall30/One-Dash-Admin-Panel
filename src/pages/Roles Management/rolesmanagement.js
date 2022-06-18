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
import axios from 'axios';
import ApiServices from '../../helpers/ApiServices';

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
            items: [],
            first_name: '' ,
            last_name: '',
            email: '',
            phone: '',
            role: '',
            passwords: '',
            status: '',
            id: ''
        }
        this.tog_edit = this.tog_edit.bind(this);
        this.tog_add = this.tog_add.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.fillUser = this.fillUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Portal Users", this.state.breadcrumbItems);
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));


        fetch("http://44.196.105.0:3000/adminusers", {
            method: 'GET',
            headers: myHeaders,
          
        })
            .then((response) => response.json())
            .then(data => {
                this.setState({items: data.body})
            })
          
    }

    getUsers(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));


        fetch("http://44.196.105.0:3000/adminusers", {
            method: 'GET',
            headers: myHeaders,
          
        })
            .then((response) => response.json())
            .then(data => {
                this.setState({items: data.body})
                
            })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleDelete(id){
        ApiServices.deleteUsers(id)
        .then(res => {
            this.setState({
                items: this.state.items.filter(item => item.id !== id)
            })
        })
       
    }

    fillUser = (id) =>{
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "userid": id
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/adminusers/userdetails", requestOptions)
        .then(response => response.json())
        .then((result) => { 
            console.log(result.body.first_name)
            this.setState({
                id: result.body.id,
                first_name: result.body.first_name ,
                last_name: result.body.last_name,
                email: result.body.email,
                phone: result.body.phone,
                role: result.body.role,
                password: result.body.password,
                status: result.body.status
            })
            console.log("first_name ", this.state.first_name)
        })
        .catch(error => console.log('error', error));

        this.tog_edit();
    }

    editUser(id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "id": id,
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "email": this.state.email,
        "phone": this.state.phone,
        "password": this.state.password,
        "role": this.state.role,
        "status": this.state.status
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/adminusers/update", requestOptions)
        .then(response => response.json())
        .then((result) => {
            console.log(result)
            if(result.statusCode=="200"){
                this.getUsers()
                this.tog_edit()
                this.setState({
                    first_name: '' ,
                    last_name: '',
                    email: '',
                    phone: '',
                    role: '',
                    passwords: '',
                    status: ''
                })
            }else{
                alert (result.body)
            }
            
        } )
        .catch(error => console.log('error', error));
            }

    createUser(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " +localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "first_name": this.state.first_name,
          "last_name": this.state.last_name,
          "email": this.state.email,
          "password": this.state.passwords,
          "phone": this.state.phone,
          "role": this.state.role
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://44.196.105.0:3000/adminusers/register", requestOptions)
            .then((response) => response.json())
            .then(data => {
                console.log(data.status)
                if(data.statusCode=="200"){
                    this.getUsers()
                    this.tog_add()
                    this.setState({
                        first_name: '' ,
                        last_name: '',
                        email: '',
                        phone: '',
                        role: '',
                        passwords: ''
                    })
                }else{
                    alert (data.body)
                }
            }
          )
          .catch(error => console.log('error', error));
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
        const {items} = this.state
        console.log(items)
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
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Phone No</th>
                                                <th>Password</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <th>Created At</th>
                                                <th>updated At</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            {
                                                items.map((item) => (
                                                    <tr>
                                                    <th scope="row" key={item.id}>{item.id}</th>
                                                    <td>{item.first_name}</td>
                                                    <td>{item.last_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{this.state.hidden ? '*********' : item.password}</td>
                                                    <td>
                                                    {
                                                     item.role == '1' ? 'admin' : item.role == '2' ? 'support' : 'marketing'
                                                    }
                                                    </td>
                                                    <td>{item.status}</td>
                                                    <td> {item.created_at}</td>
                                                    <td>{item.updated_at}</td>
                                                    <td>
                                                        <Button type="button" onClick={() => this.fillUser(item.id)}  style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>
                                                        <Button type="button" color="danger" onClick={() => this.handleDelete(item.id)} className="waves-effect waves-light"><i className="ti-trash"></i></Button>
                                                    </td>
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
                                <Label for="example-text-input" className="col-sm-2 col-form-label">First Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="first_name" value={this.state.first_name} type="text" onChange={ this.changeHandler}   id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Last Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="last_name" value={this.state.last_name} type="text" onChange={ this.changeHandler} id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="email" value={this.state.email} onChange={this.changeHandler} id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="password" type="text" value={this.state.password}  onChange={ this.changeHandler} id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Phone No.</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="phone" type="number" value={this.state.phone} onChange={ this.changeHandler} id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Role</Label>
                                <Col sm="10">
                                    <select className="form-control" name='role' value={this.state.role} onChange={ this.changeHandler}>
                                        <option>Select</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Support</option>
                                        <option value="3">Marketing</option>
                                    </select>
                                </Col>
                            </FormGroup> 
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='status' value={this.state.status} onChange={this.changeHandler}> 
                                    <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>                        
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_edit}>Close</Button>
                            <Button type="button" color="primary" onClick={() => this.editUser(this.state.id)} className="waves-effect waves-light">Save changes</Button>
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
                        <Label for="example-text-input" className="col-sm-2 col-form-label">First Name</Label>
                        <Col sm="10">
                            <Input className="form-control" name="first_name" type="text" value={ this.state.first_name } onChange ={this.changeHandler} id="example-text-input"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="example-text-input" className="col-sm-2 col-form-label">Last Name</Label>
                        <Col sm="10">
                            <Input className="form-control" name="last_name" type="text" value={ this.state.last_name } onChange ={this.changeHandler} id="example-text-input"/>
                        </Col>
                    </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" value={ this.state.email } onChange ={this.changeHandler} type="email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="passwords" type="password" value={ this.state.passwords } onChange ={this.changeHandler} id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Phone No.</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="phone" type="number" value={ this.state.phone } onChange ={this.changeHandler} id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Role</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="role" type="number" value={ this.state.role } onChange ={this.changeHandler} id="example-url-input"/>
                                </Col>
                            </FormGroup>
                           {/* <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Role</Label>
                                <Col sm="10">
                                    <select className="form-control">
                                        <option>Select</option>
                                        <option>Admin</option>
                                        <option>Support</option>
                                        <option>Marketing</option>
                                    </select>
                                </Col>
                                        </FormGroup> */}
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_add}>Close</Button>
                            <Button type="button" color="primary" onClick={() => this.createUser()} className="waves-effect waves-light">Add User</Button>
                        </ModalFooter>                      
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Rolesmanagement);
