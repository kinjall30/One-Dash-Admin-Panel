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

class AddSupportPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Support", link : "#" },
                { title : "Add Priority", link : "#" },
            ],
           modal_add_pri: false,
            modal_edit_pri: false,
            pri: [],
            priority: [],
            id: '',
            arr: [],
            priority_name: '',
            priority_description: '',
            priority_status: '',
            success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.tog_add_priority = this.tog_add_priority.bind(this);
        this.tog_edit_priority = this.tog_edit_priority.bind(this)
        this.createSupportPriority = this.createSupportPriority.bind(this);
        this.fillPriority = this.fillPriority.bind(this);
        this.vieallSupportPriority = this.vieallSupportPriority.bind(this);
        this.deletePriority = this.deletePriority.bind(this) ;
        this.updateSupportPriority = this.updateSupportPriority.bind(this)
        this.viewPriorityById = this.viewPriorityById.bind(this)
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Customer Support", this.state.breadcrumbItems);


        this.vieallSupportPriority()
    }

    fillPriority = (pri) => {
        this.setState({id: pri.id, priority_name: pri.priority_name, priority_description: pri.priority_description, priority_status: pri.priority_status})

        this.tog_edit_priority();
    }

   

    createSupportPriority() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"priority_name": this.state.priority_name, "priority_description": this.state.priority_description, "priority_status": this.state.priority_status});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/create", requestOptions).then(response => response.json()).then(result => {
            if (result.statusCode == "200") {
                this.vieallSupportPriority();
                this.tog_add_priority();
                this.setState({priority_name: '', priority_description: '', priority_status: ''})
            }
        }).catch(error => console.log('error', error));
    }

    updateSupportPriority() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"priority_name": this.state.priority_name, "priority_description": this.state.priority_description, "priority_status": this.state.priority_status});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/create/" + this.state.id, requestOptions).then(response => response.json()).then(result => {
            if (result.statusCode == "200") {
                this.vieallSupportPriority()
                this.tog_edit_priority()
                this.setState({id: '', priority_name: '', priority_description: '', priority_status: ''})
            }

        }).catch(error => console.log('error', error));
    }

    vieallSupportPriority() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support", requestOptions).then(response => response.json()).then(data => {
            var array = []
            for (let i = 0; i < data.body.length; i++) {
                array.push({
                    id: data.body[i].id,
                    priority_name: data.body[i].priority_name,
                    priority_description: data.body[i].priority_description,
                    priority_status: data.body[i].priority_status,
                    created_at: data.body[i].created_at,
                    updated_at: data.body[i].updated_at,
                    button: <div>
                        <Button type="button"
                            onClick={
                                () => this.fillPriority(data.body[i])
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
            this.setState({priority: array})
        }).catch(error => console.log('error', error));
    }

    viewPriorityById() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));
    }

    deletePriority() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/" + this.state.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.vieallSupportPriority()
        }).catch(error => console.log('error', error));
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    tog_add_priority() {
        this.setState(prevState => ({
            modal_add_pri: !prevState.modal_add_pri
        }));
    }

    tog_edit_priority() {
        this.setState(prevState => ({
            modal_edit_pri: !prevState.modal_edit_pri
        }));
    }

  
    render() {
        // const {priority} = this.state

        
        const pri = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Priority Name',
                    field: 'priority_name',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Priority Description',
                    field: 'priority_description',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Priority Status',
                    field: 'priority_status',
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
            rows: this.state.priority
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
                        this.deletePriority()
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
                    <h4>Support Priority</h4>
                </div>

                <Button type="button"
                    onClick={
                        () => this.tog_add_priority()
                    }
                    style={
                        {marginBottom: 10}
                    }
                    color="info"
                    className="waves-effect waves-light">
                    Add Priority
                </Button>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <MDBDataTable responsive bordered striped
                                    data={pri}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                 {/* Adding new priority form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_add_pri
                        }
                        toggle={
                            this.tog_add_priority
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_add_priority
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Priority Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="priority_name" type="text"
                                        value={
                                            this.state.priority_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Priority Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="priority_description" type="text"
                                        value={
                                            this.state.priority_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='priority_status'
                                        value={
                                            this.state.priority_status
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
                                    () => this.createSupportPriority()
                                }
                                className="waves-effect waves-light">Add Priority</Button>
                        </ModalFooter>
                    </Modal>
                </Row>


                 {/* Editing priority form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_edit_pri
                        }
                        toggle={
                            this.tog_edit_priority
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_edit_priority
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Priority Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="priority_name" type="text"
                                        value={
                                            this.state.priority_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Priority Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="priority_description" type="text"
                                        value={
                                            this.state.priority_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='priority_status'
                                        value={
                                            this.state.priority_status
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
                                    this.tog_edit_priority
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.updateSupportPriority()
                                }
                                className="waves-effect waves-light">Save Changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(AddSupportPriority);