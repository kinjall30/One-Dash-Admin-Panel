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
    Button,
    FormGroup,
    Input,
    Label,
     ModalHeader,
    ModalBody,
    ModalFooter,
    Modal
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


import {MDBDataTable} from 'mdbreact';

// Import datatable css
import "../Tables/datatables.scss";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class AddFaqCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Faq", link : "#" },
                { title : "Add Category", link : "#" },
            ],
            category:[],
             modal_edit: false,
             modal_add: false,
             category_name:'',
             category_description:"",
             id:'',
             category_status: '',
             created_at: '',
             updated_at:'',
             category_id: '', 
             success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: ""
        }
        this.tog_add = this.tog_add.bind(this);
        this.tog_edit = this.tog_edit.bind(this);
        this.viewFaqCategory = this.viewFaqCategory.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.fillCategory = this.fillCategory.bind(this);
        this.updateFaqCategory = this.updateFaqCategory.bind(this);
        this.deleteFaqCategory = this.deleteFaqCategory.bind(this);
        this.createFaqCategory = this.createFaqCategory.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Faq", this.state.breadcrumbItems);
        this.viewFaqCategory();
    }

    viewFaqCategory(){
       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var raw = "";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq", requestOptions)
        .then(response => response.json())
        .then(data => {
            var array = []
                for(let i=0; i< data.body.length; i++){
                    array.push({
                        id: data.body[i].id,
                        category_name: data.body[i].category_name,
                        category_description: data.body[i].category_description,
                        category_status: data.body[i].category_status,
                        created_at: data.body[i].created_at,
                        updated_at: data.body[i].updated_at,
                        button: 
                            <div>
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
        })
        .catch(error => console.log('error', error));

   }
  
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    
     fillCategory = (category) => {
          this.setState({
           id: category.id ,
           category_name: category.category_name,
           category_description: category.category_description,
           category_status: category.category_status,
           created_at: category.created_at,
           updated_at: category.updated_at
        })
        this.tog_edit();
    }

     updateFaqCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "category_name": this.state.category_name, 
            "category_description": this.state.category_description, 
            "category_status": this.state.category_status
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/create/" + this.state.id, requestOptions)
        .then(response => response.json())
        .then(result =>{
            if(result.statusCode == "200"){
                this.tog_edit()
                this.viewFaqCategory()
                this.setState({
                id: '',
                category_name:'',
                category_description:'',
                category_status: ''
            })
            }
            else{
                alert("Update failed!")
            }
            
        })
        .catch(error => console.log('error', error));

   }

   deleteFaqCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/" + this.state.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            //  this.setState({
            //     category: this.state.category.filter(cat => cat.id !== id)
            // })
            this.viewFaqCategory()
        })
        .catch(error => console.log('error', error));

   }

   createFaqCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "category_name": this.state.category_name, 
            "category_description": this.state.category_description, 
            "category_status":this.state.category_status
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/create", requestOptions)
        .then(response => response.json())
        .then(result =>{
            if(result.statusCode == "200"){
                this.viewFaqCategory()
                this.tog_add()
                
                this.setState({
                    category_name: '',
                    category_description: '',
                    category_status: ''
            })
            }else{
                alert("Creation failed")
            }
            
            
        })
        .catch(error => console.log('error', error));

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
                },
                 {
                    label: 'Created At',
                    field: 'created_at',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Updated At',
                    field: 'updated_at',
                    sort: 'asc',
                    width: 100
                },
                {
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
                        this.deleteFaqCategory()
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
                <div style={
                    {
                        marginTop: 20,
                        marginBottom: 30
                    }
                }>
                    <Button type="button"
                        onClick={
                            ()=> this.tog_add()
                        }
                        color="info"
                        className="waves-effect waves-light">
                        Add Category</Button>
                </div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <MDBDataTable
                                    responsive
                                    bordered
                                    striped
                                    data={data}
                                        
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

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
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Id</Label>
                                <Col sm="10">
                                    <Input className="form-control" disabled name="id"
                                        value={
                                            this.state.id
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_name"
                                        value={
                                            this.state.category_name
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Category Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_description" type="text"
                                        value={
                                            this.state.category_description
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
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
                                    this.tog_edit
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.updateFaqCategory()
                                }
                                className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
                
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
                                    <Input className="form-control" name="category_name"
                                        value={
                                            this.state.category_name
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Category Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_description" type="text"
                                        value={
                                            this.state.category_description
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
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
                                    this.tog_edit
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.createFaqCategory()
                                }
                                className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(AddFaqCategory);