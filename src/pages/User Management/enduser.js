import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Table,
  ModalHeader,
  ModalBody,
  ModalFooter,
    Input,
    Form,
    Modal,
Pagination,
PaginationItem,
PaginationLink

} from "reactstrap";
import { connect } from "react-redux";

import SearchBar from "../../component/Layout/Menus/search-bar";

import SweetAlert from "react-bootstrap-sweetalert";

//Import datatable css


//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class Enduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_edit: false,
            modal_add: false,
            modal_resetpassword: false,
            success_confirm : false,
            alert_confirm : false, 
            success_msg: false,
            hidden: true,
            password: '',
            newpassword: '',
            users: [],
            givenName: '',
            familyName: '',
            email: '', 
            username: '',
            pagination: ''
        }
        this.tog_edit = this.tog_edit.bind(this);
        this.tog_add = this.tog_add.bind(this);
        this.tog_resetpassword = this.tog_resetpassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.searchUser = this.searchUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.fillUser = this.fillUser.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getUserOnRender = this.getUserOnRender.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.fillUser2 = this.fillUser2.bind(this)
    }

    componentDidMount(){
        // this.props.setBreadcrumbItems("User Management", this.state.breadcrumbItems);
        if (this.props.password) {
            this.setState({ password: this.props.password });
          }

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
  
  
          fetch("http://44.196.105.0:3000/endusers", {
              method: 'GET',
              headers: myHeaders,
            
          })
              .then((response) => response.json())
              .then(data => {
                  this.setState({users: data.body, pagination: data.paginationToken})
              })
    }

    getUsers(pagination){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));


        fetch("http://44.196.105.0:3000/endusers?paginationToken=" + pagination, {
            method: 'GET',
            headers: myHeaders,
          
        })
            .then((response) => response.json())
            .then(data => {
                this.setState({users: data.body, pagination: data.paginationToken})
                console.log(data)
                
            })
    }

    searchUser(value){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": value
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers/search", requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState({users: data.body})
        })
        .catch(error => console.log('error', error));
    }

    deleteUser(username){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " +localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": username
        });

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers", requestOptions)
        .then(response => response.json())
        .then(data => 
            {
                this.setState({users: this.state.users.filter(user => user.Username != username)})
            })
        .catch(error => console.log('error', error));
    }

   

    fillUser = (user) => {
        this.setState({
            familyName: user.family_name,
            givenName: user.given_name,
            email: user.email,
            username: user.Username
        })
        this.tog_edit();
    }

    fillUser2 = (user) => {
        this.setState({
            username: user.Username
        })
        this.tog_resetpassword();
    }

    getUserOnRender(){
         var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
  
  
          fetch("http://44.196.105.0:3000/endusers", {
              method: 'GET',
              headers: myHeaders,
            
          })
              .then((response) => response.json())
              .then(data => {
                  this.setState({users: data.body, pagination: data.paginationToken})
              })
    }

    updateUser() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": this.state.username,
        "givenName": this.state.givenName,
        "familyName": this.state.familyName,
        "email": this.state.email
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.statusCode == "200") {
                this.getUserOnRender()
                this.tog_edit()
                this.setState({
                    givenName: '',
                    familyName: '',
                    email: '',
                    username: '',
                })
            } else {
                alert(result.body)
            }
        })
        .catch(error => console.log('error', error));
    }

    updatePassword(){
        if(this.state.password !== this.state.newpassword){
            return alert("Password do not match")
        }
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers/reset-password", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.statusCode == 200){
                this.tog_resetpassword()
                this.setState({
                username: '',
                password: '',
                newpassword: ''
            })
            }
            else{
                alert(result.body)
            }
            
            console.log(result)
        })
        .catch(error => console.log('error', error));
        
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
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
    tog_resetpassword(){
        this.setState(prevState => ({
            modal_resetpassword: !prevState.modal_resetpassword
          })); 
    }
  
    render() {
        const {users} = this.state
        console.log(users)

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
                <h1>One Dash Users Details</h1>
                <Col xs="4">
                    <Form className="app-search d-none d-lg-block">
                        <div className="position-relative">
                            <Input type="text" className="form-control" onChange={() => this.searchUser(this.value)} placeholder="Search..."/>
                            <span className="fa fa-search"></span>
                        </div>
                    </Form>
                </Col>
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
                                               
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map((user) =>(
                                                    <tr>
                                                        <th>{user.sub}</th>
                                                        <td>{user.given_name}</td>
                                                        <td>{user.family_name}</td>
                                                        <td>{user.Username}</td>
                                                        <td>{user.email}</td>
                                                       <td style={{width: 300}}>
                                                        <Button type="button"
                                                             onClick={
                                                                () => this.fillUser(user)
                                                            }
                                                            style={
                                                                {marginRight: 10}
                                                            }
                                                            color="primary"
                                                            className="waves-effect waves-light">
                                                            <i className="ti-pencil"></i>
                                                        </Button>
                                                        <Button type="button" onClick={() => this.setState({ success_msg: true })} color="danger" className="waves-effect waves-light" id="sa-warning"> <i className="ti-trash"></i></Button>
                                                        {this.state.success_msg ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    success
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>{
                                                        this.deleteUser(user.Username)
                                                        this.setState({
                                                            success_msg: false,
                                                        })
                                                    }
                                                    }
                                                    onCancel={() =>
                                                        this.setState({
                                                            success_msg: false,
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
                                                    </SweetAlert>
                                                ) : null}
                                                        {/* 
                                                        <Button type="button" onClick={()=> this.deleteUser(user.Username)} color="danger"
                                                            className="waves-effect waves-light">
                                                            <i className="ti-trash"></i>
                                                        </Button>*/}
                                                        <Button type = "button" onClick = {()=>this.fillUser2(user)}
                                                            style = {{marginLeft: 10}}
                                                            color = "primary" className = "waves-effect waves-light" > <i className="mdi mdi-lock-open-variant-outline"></i>
                                                        </Button>
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

                <Row>

                        <Col lg="12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end">
                                            <PaginationItem disabled>
                                                <PaginationLink href="#" tabIndex="-1">Previous</PaginationLink>
                                            </PaginationItem>
                                            {/*
                                            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                                            <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                                            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                                        */}
                                            <PaginationItem>
                                                <PaginationLink onClick={() => this.getUsers(this.state.pagination)}>Next</PaginationLink>
                                            </PaginationItem>
                                        </ul>
                                    </nav> 
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
                                 <Input className="form-control" type="text" name="givenName" value={this.state.givenName} onChange={this.changeHandler} id="example-text-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-text-input" className="col-sm-2 col-form-label">Last Name</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="text" name="familyName" value={this.state.familyName} onChange={this.changeHandler}  id="example-text-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                            
                             <Col sm="10">
                                 <Input className="form-control" type="hidden" name="username"  id="example-text-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="email" name="email" value={this.state.email} onChange={this.changeHandler} id="example-search-input"/>
                             </Col>
                         </FormGroup>
                                                
                     </ModalBody>
                     <ModalFooter>
                         <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_edit}>Close</Button>
                         <Button type="button" color="primary" onClick={()=>this.updateUser()} className="waves-effect waves-light">Save changes</Button>
                     </ModalFooter>                      
                 </Modal>
                </Row>

                 {/* Reset Password Form */}
                 <Row>     
                 <Modal
                     isOpen={this.state.modal_resetpassword}
                     toggle={this.tog_resetpassword}
                     autoFocus={true}
                     size = "lg"
                 >
                     <ModalHeader toggle={this.tog_resetpassword}>
                        Reset Password
                     </ModalHeader>
                     <ModalBody>
                         <FormGroup row>
                             <Label for="example-url-input" className="col-sm-2 col-form-label">Username</Label>
                             <Col sm="10">
                                 <Input className="form-control" name="username" disabled value={this.state.username} type="text" id="example-url-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-url-input" className="col-sm-2 col-form-label">Create New Password</Label>
                             <Col sm="10">
                                 <Input className="form-control" name="password" type="password" value={this.state.password} onChange={this.changeHandler} id="example-url-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-url-input" className="col-sm-2 col-form-label">Confirm Password</Label>
                             <Col sm="10">
                                 <Input className="form-control" name="newpassword" value={this.state.newpassword} type="password" onChange={this.changeHandler} id="example-url-input"/>
                             </Col>
                         </FormGroup>                       
                     </ModalBody>
                     <ModalFooter>
                         <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                         <Button type="button" color="primary" className="waves-effect waves-light" onClick={()=> this.updatePassword()}>Save</Button>
                     </ModalFooter>                      
                 </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Enduser);
