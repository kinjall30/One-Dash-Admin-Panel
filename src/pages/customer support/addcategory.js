import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    FormGroup,
    Input,
    Label,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Modal
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import SweetAlert from "react-bootstrap-sweetalert";

import {MDBDataTable} from 'mdbreact';

// Import datatable css
import "../Tables/datatables.scss";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class AddSupportCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Support", link : "#" },
                { title : "Add Category", link : "#" },
            ],
            modal_add: false,
            modal_edit: false,
            category: [],
            cat: [],
            id: '',
            category_name: '',
            category_description: '',
            category_status: '',
            arr: [],
            success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: ""
        }
       this.deletesupportCategory = this.deletesupportCategory.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.tog_add = this.tog_add.bind(this);
        this.tog_edit = this.tog_edit.bind(this);
        this.createsupportCategory = this.createsupportCategory.bind(this);
        this.viewsupportCategoryById = this.viewsupportCategoryById.bind(this);
        this.fillCategory = this.fillCategory.bind(this); 
        this.updatesupportCategory = this.updatesupportCategory.bind(this);
        this.viewsupportCategory = this.viewsupportCategory.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Customer Support", this.state.breadcrumbItems);

      
       this.viewsupportCategory()
    }

    
    viewsupportCategory() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support", requestOptions).then(response => response.json()).then(data => {
            var array = []
            for (let i = 0; i < data.body.length; i++) {
                array.push({
                    id: data.body[i].id,
                    category_name: data.body[i].category_name,
                    category_description: data.body[i].category_description,
                    category_status: data.body[i].category_status,
                    created_at: data.body[i].created_at,
                    updated_at: data.body[i].updated_at,
                    button: <div>
                        <Button type="button"
                            onClick={
                                () => this.fillCategory(data.body[i])
                            }
                            style={
                                {marginRight: 10}
                            }
                            color="primary"
                            className="waves-effect waves-light">
                            <i className="ti-pencil"></i>
                        </Button>
                         <Button type="button" color="danger"
                            onClick={
                                () => this.setState({alert_confirm: true, id: data.body[i].id})
                            }
                            className="waves-effect waves-light"
                            id="sa-warning"><i className="ti-trash"></i>
                        </Button>
                    </div>

                })
            }
            this.setState({category: array})
        }).catch(error => console.log('error', error));

    }

    viewsupportCategoryById() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    deletesupportCategory() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/" + this.state.id, requestOptions).then(response => response.json()).then(result => {
            this.setState({
                category: this.state.category.filter(cat => cat.id != this.state.id)
            })
        }).catch(error => console.log('error', error));

    }

    createsupportCategory() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_name": this.state.category_name, "category_description": this.state.category_description, "category_status": this.state.category_status});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/create", requestOptions).then(response => response.json()).then(result => {
            if (result.statusCode == "200") {
                this.viewsupportCategory()
                this.tog_add()
                this.setState({category_name: '', category_description: '', category_status: ''})

            }

        }).catch(error => console.log('error', error));

    }

    fillCategory = (cat) => {
        this.setState({id: cat.id, category_name: cat.category_name, category_description: cat.category_description, category_status: cat.category_status})
        this.tog_edit();
    }

     updatesupportCategory() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_name": this.state.category_name, "category_description": this.state.category_description, "category_status": this.state.category_status});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/create/" + this.state.id, requestOptions).then(response => response.json()).then(result => {
            this.viewsupportCategory();
            this.tog_edit()
            this.setState({id: '', category_name: '', category_description: '', category_status: ''})
        }).catch(error => console.log('error', error));

    }

    
    tog_add() {
        this.setState(prevState => ({
            modal_add: !prevState.modal_add
        }));
    }

    tog_edit() {
        this.setState(prevState => ({
            modal_edit: !prevState.modal_edit
        }));
    }

  
    render() {
        // const {category} = this.state

        const cat = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Category Name',
                    field: 'category_name',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Category Description',
                    field: 'category_description',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Category Status',
                    field: 'category_status',
                    sort: 'asc',
                    width: 200
                }, {
                    label: 'Created At',
                    field: 'created_at',
                    sort: 'asc',
                    width: 100
                }, {
                    label: 'Updated At',
                    field: 'updated_at',
                    sort: 'asc',
                    width: 100
                }, {
                    label: 'Action',
                    field: 'button',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: this.state.category
        };

        return (
            <React.Fragment>
                {this.state.alert_confirm ? (
                <SweetAlert
                    title="Are you sure?"
                    warning
                    showCancel
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    onConfirm={() =>{
                        this.deletesupportCategory()
                        this.setState({
                            success_confirm: true,
                            alert_confirm : false,
                            dynamic_title: "Deleted!",
                            dynamic_description: "User has been deleted."
                        })}
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
                 <div>
                    <h4>Support Category</h4>
                </div>

                <Button type="button"
                    onClick={
                        this.tog_add
                    }
                    style={
                        {marginBottom: 10}
                    }
                    color="info"
                    className="waves-effect waves-light">
                    Add Category
                </Button>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <MDBDataTable responsive bordered striped
                                    data={cat}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                 {/* Adding new category form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_add
                        }
                        toggle={
                            this.tog_add
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_add
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_name" type="text"
                                        value={
                                            this.state.category_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_description" type="text"
                                        value={
                                            this.state.category_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='category_status'
                                        value={
                                            this.state.category_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_add
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.createsupportCategory()
                                }
                                className="waves-effect waves-light">Add Category</Button>
                        </ModalFooter>
                    </Modal>
                </Row>


                {/* Editing category form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_edit
                        }
                        toggle={
                            this.tog_edit
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_edit
                        }>
                            Edit Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_name" type="text"
                                        value={
                                            this.state.category_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_description" type="text"
                                        value={
                                            this.state.category_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='category_status'
                                        value={
                                            this.state.category_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_add
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.updatesupportCategory()
                                }
                                className="waves-effect waves-light">Save</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(AddSupportCategory);