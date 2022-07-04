import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    TabContent,
    TabPane,
    FormGroup,
    Input,
    Label,
    Collapse,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Table
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import SweetAlert from "react-bootstrap-sweetalert";

import { MDBDataTable } from 'mdbreact';

// Import datatable css
import "../Tables/datatables.scss";


// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class CustomerService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Customer", link : "#" },
                { title : "Service", link : "#" },
            ],
            tickets: [],
            created_at: '',
            upated_at: '',
            ticket_name: '',
            ticket_description:'',
            ticket_assignment:'',
            ticket_status:'',
            priority_name: '',
            category_name:'',
            success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: "",
            modal_technician: false
        }
       this.tog_technician = this.tog_technician.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Customer Service", this.state.breadcrumbItems);
       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/support/log", requestOptions)
        .then(response => response.json())
        .then(data => {
            var array = []
                for(let i=0; i< data.body.length; i++){
                    array.push({
                        ticket_name: data.body[i].ticket_name,
                        ticket_description: data.body[i].ticket_description,
                        ticket_status: data.body[i].ticket_status,
                        priority_name: data.body[i].priority_name,
                        category_name: data.body[i].category_name,
                        ticket_assignment: data.body[i].ticket_assignment,
                        created_at: data.body[i].created_at,
                        updated_at: data.body[i].updated_at,
                        button: 
                            <div>
                                <Button type="button"
                                    onClick={
                                        () => this.tog_technician()
                                    }
                                    style={
                                        {marginRight: 10}
                                    }
                                    color="primary"
                                    className="waves-effect waves-light">
                                    <i className="ion ion-md-arrow-round-forward"></i>
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
                  this.setState({tickets: array})
            // this.setState({
            //     tickets: result.body
            // })
            // console.log(result.body)
            // console.log("hello")
        })
        .catch(error => console.log('error', error));
    }

      tog_technician() {
        this.setState(prevState => ({
            modal_technician: !prevState.modal_technician
        }));
    }
  
    render() {
        const {tickets} = this.state
        console.log(tickets)
          const data = {
            columns: [
                {
                    label: 'Ticket Name',
                    field: 'ticket_name',
                    sort: 'asc',
                    width: 150
                },
                 {
                    label: 'Ticket Description',
                    field: 'ticket_description',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Status',
                    field: 'ticket_status',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Priority',
                    field: 'priority_name',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Category',
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
            rows: this.state.tickets
        };
        // this.viewSupportLog()
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
                        this.handleDelete()
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
                <Row> 
                    <Col md='3' >
                        <Card className="mini-stat" style={{backgroundColor: "#f5b225"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>Unsolved</h5>
                                <h5>10</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#58db83"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>OverDue</h5>
                                <h5>2</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#29bbe3"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                                
                                <h5>Due Today</h5>
                                <p>                       </p>
                                <h5>1</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#f1734f"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                        
                                <h5>Onhold</h5>
                                <h5>5</h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                 <div style={
                    {
                        marginTop: 20,
                        marginBottom: 30
                    }
                }>
                    <Button type="button"
                        onClick={
                            this.tog_add
                        }
                        color="info"
                        className="waves-effect waves-light">
                        Add Ticket
                    </Button>
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
                            this.state.modal_technician
                        }
                        toggle={
                            this.tog_technician
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_technician
                        }>
                            Edit Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Assign Ticket To</Label>
                                <Col sm="10">
                                    <select className="form-control" name='faq_status'
                                        value={
                                            this.state.faq_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Assign Ticket</option>
                                        <option value="Active">Kinjal Prajapati</option>
                                        <option value="Inactive">AAryan Chavda</option>
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
               
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CustomerService);