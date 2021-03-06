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
    Modal
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
            hidden: true,
            password: '',
            items: [], 
        }
        this.tog_edit = this.tog_edit.bind(this);
        this.tog_add = this.tog_add.bind(this);
        this.tog_resetpassword = this.tog_resetpassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
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
                  this.setState({items: data.body.Users})
                  console.log(data.body)
                  
              })
    }

    getUsers(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));


        fetch("http://44.196.105.0:3000/endusers", {
            method: 'GET',
            headers: myHeaders,
          
        })
            .then((response) => response.json())
            .then(data => {
                this.setState({items: data.body})
                console.log(data)
                
            })
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
                <h1>One Dash Users Details</h1>
                <Col xs="4">
                <SearchBar/>
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
                                               
                                                <th>Email</th>
                                               
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {
                                                items.map((item) => (
                                                    <tr>
                                                    

                                                    {
                                                        
                                                        item.Attributes.map((para) => (
                                                            (para.Name == "given_name" ? <th> {para.Value} </th> : null)
                                                        ))
                                                    }
                                                    
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
                                                            <Button type="button" onClick={this.tog_resetpassword} style = {{marginLeft: 10}} color="primary" className="waves-effect waves-light"><i className="mdi mdi-lock-open-variant-outline"></i></Button>
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
                                 <Input className="form-control" type="text" defaultValue="Mark" id="example-text-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-text-input" className="col-sm-2 col-form-label">Last Name</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="text" defaultValue="Otto"  id="example-text-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-text-input" className="col-sm-2 col-form-label">Username</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="text" defaultValue="@mdo"  id="example-text-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="email" defaultValue="mark@gmail.com"  id="example-search-input"/>
                             </Col>
                         </FormGroup>
                                                
                     </ModalBody>
                     <ModalFooter>
                         <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_edit}>Close</Button>
                         <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
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
                             <Label for="example-url-input" className="col-sm-2 col-form-label">Create New Password</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="password"  id="example-url-input"/>
                             </Col>
                         </FormGroup>
                         <FormGroup row>
                             <Label for="example-url-input" className="col-sm-2 col-form-label">Confirm Password</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="password"  id="example-url-input"/>
                             </Col>
                         </FormGroup>                       
                     </ModalBody>
                     <ModalFooter>
                         <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                         <Button type="button" color="primary" className="waves-effect waves-light">Save</Button>
                     </ModalFooter>                      
                 </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Enduser);
