import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    FormGroup
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import SweetAlert from "react-bootstrap-sweetalert";
import { MDBDataTable } from 'mdbreact';

// Import datatable css
import "../Tables/datatables.scss";
// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "FAQ", link : "#" },
            ],
            category:[],
             modal_add_faq: false,
             modal_edit_faq: false,
             id:'',
             created_at: '',
             updated_at:'',
             faq_topic:'',
             faq_answer: '',
             faq_status: '',
             category_id: '',
             faq:[],
             success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: ""
        }
        this.viewAllFaq = this.viewAllFaq.bind(this);
        this.createFaq = this.createFaq.bind(this);
        this.deleteFaq = this.deleteFaq.bind(this);
        this.updateFaq = this.updateFaq.bind(this);
        this.faqById = this.faqById.bind(this);
        this.tog_add_faq = this.tog_add_faq.bind(this);
        this.tog_edit_faq = this.tog_edit_faq.bind(this);
        this.fillFaq = this.fillFaq.bind(this);
        this.viewFaqCategory = this.viewFaqCategory.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("FAQ", this.state.breadcrumbItems);
      this.viewAllFaq()
      this.viewFaqCategory()
    }

    viewAllFaq(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("http://44.196.105.0:3000/faq/", requestOptions)
    .then(response => response.json())
    .then(data => {
        var array = []
            for(let i=0; i< data.body.length; i++){
                array.push({
                    id: data.body[i].id,
                    category_id: data.body[i].category_id,
                    category_name: data.body[i].category_name,
                    faq_topic: data.body[i].faq_topic,
                    faq_answer: data.body[i].faq_answer,
                    faq_status: data.body[i].faq_status,
                    created_at: data.body[i].created_at,
                    updated_at: data.body[i].updated_at,
                    button: 
                        <div>
                            <Button type="button"
                                onClick={
                                    () => this.fillFaq(data.body[i])
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
                this.setState({faq: array})
    })
    .catch(error => console.log('error', error));
    }
            

   createFaq(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "category_id": this.state.category_id,
        "faq_topic": this.state.faq_topic,
        "faq_answer": this.state.faq_answer,
        "faq_status": this.state.faq_status
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/create", requestOptions)
        .then(response => response.json())
        .then(result =>{
                if(result.statusCode == "200"){
                this.viewAllFaq()
                this.tog_add_faq()
                
                this.setState({
                    category_id: '',
                    faq_topic: '',
                    faq_answer: '',
                    faq_status: ''
            })
            }else{
                alert("Creation failed")
            }
            
        })
        .catch(error => console.log('error', error));
   }

   deleteFaq(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/" + this.state.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.viewAllFaq()
        })
        .catch(error => console.log('error', error));

   }

   faqById(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/3", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

   }

   fillFaq = (faq) => {
          this.setState({
            id: faq.id,
           category_id: faq.category_id ,
           faq_topic: faq.faq_topic,
           faq_answer: faq.faq_answer,
           faq_status: faq.faq_status,
           created_at: faq.created_at,
           updated_at: faq.updated_at
        })
        this.tog_edit_faq();
    }

   updateFaq(id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "category_id": this.state.category_id, 
            "faq_topic": this.state.faq_topic, 
            "faq_answer": this.state.faq_answer, 
            "faq_status": this.state.faq_status
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/create/" + id, requestOptions)
        .then(response => response.json())
        .then(result =>{
             if(result.statusCode == "200"){
                this.tog_edit_faq()
                this.viewAllFaq()
                this.setState({
                category_id: '',
                faq_topic:'',
                faq_answer:'',
                faq_status: ''
            })
            }
            else{
                alert("Update failed!")
            }
        })
        .catch(error => console.log('error', error));

   }

     viewFaqCategory(){
       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

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
                        updated_at: data.body[i].updated_at                        
                    })
                }
                  this.setState({category: array})
        })
        .catch(error => console.log('error', error));

   }
  

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


  
    tog_edit_faq() {
        this.setState(prevState => ({
            modal_edit_faq: !prevState.modal_edit_faq
        }));
    }
    tog_add_faq() {
        this.setState(prevState => ({
            modal_add_faq: !prevState.modal_add_faq
        }));
    }

   

    render() {

         const faq = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                 
                {
                    label: 'Faq Topic',
                    field: 'faq_topic',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Faq Answer',
                    field: 'faq_answer',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Faq Status',
                    field: 'faq_status',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Category Name',
                    field: 'category_name',
                    sort: 'asc',
                    width: 100
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
            rows: this.state.faq
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
                        this.deleteFaq()
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
                            ()=> this.tog_add_faq()
                        }
                        color="info"
                        className="waves-effect waves-light">
                        Add Faq</Button>
                </div>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <MDBDataTable
                                    responsive
                                    bordered
                                    striped
                                    data={faq}      
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Modal isOpen={
                            this.state.modal_edit_faq
                        }
                        toggle={
                            this.tog_edit_faq
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_edit_faq
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
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Faq Topic</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="faq_topic" type="text"
                                        value={
                                            this.state.faq_topic
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Faq Answer</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="faq_answer" type="text"
                                        value={
                                            this.state.faq_answer
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                           <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Category</Label>
                                <Col sm="10">
                                    <select className="form-control" name='category_id'
                                        value={
                                            this.state.category_id
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                    {this.state.category.map((cat)=> (
                                        <option value={cat.id}>{cat.category_name}</option>
                                    ))}
                                        
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Faq Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='faq_status'
                                        value={
                                            this.state.faq_status
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
                                    this.tog_edit_faq
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.updateFaq(this.state.id)
                                }
                                className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
                
                 <Row>
                    <Modal isOpen={
                            this.state.modal_add_faq
                        }
                        toggle={
                            this.tog_add_faq
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_add_faq
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Faq Topic</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="faq_topic" type="text"
                                        value={
                                            this.state.faq_topic
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Faq Answer</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="faq_answer" type="text"
                                        value={
                                            this.state.faq_answer
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Category</Label>
                                <Col sm="10">
                                    <select className="form-control" name='category_id'
                                        value={
                                            this.state.category_id
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                    {this.state.category.map((cat)=> (
                                        <option value={cat.id}>{cat.category_name}</option>
                                    ))}
                                        
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Faq Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='faq_status'
                                        value={
                                            this.state.faq_status
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
                                    this.tog_add_faq
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.createFaq()
                                }
                                className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Faq);