import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    FormGroup,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import SweetAlert from "react-bootstrap-sweetalert";

import { MDBDataTable } from 'mdbreact';

// Import datatable css
import "../Tables/datatables.scss";

//url
import url from "../../helpers/apiUrl"

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
            category_id: '',
            priority_id: '',
            category: [],
            priority: [],
            technician: [],
            id: '',
            success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: "",
            modal_technician: false,
            modal_create_ticket: false,
            modal_edit_ticket: false,
            customer_remarks: '',
            technician_remarks: '',
            complition_date: '',
            technician_id: '',
            technician_name: '',
            support_log_id: '',
            openCount: '',
            newCount: '',
            runningCount: '',
            completedCount: '',
            user_id: '',
            users: []
        }
       this.tog_technician = this.tog_technician.bind(this);
       this.tog_create_ticket = this.tog_create_ticket.bind(this);
       this.createSupportLog = this.createSupportLog.bind(this);
       this.vieallSupportPriority = this.vieallSupportPriority.bind(this);
       this.viewsupportCategory = this.viewsupportCategory.bind(this);
       this.deleteSupportLog = this.deleteSupportLog.bind(this);
       this.viewSupportLog = this.viewSupportLog.bind(this);
       this.changeHandler = this.changeHandler.bind(this);
       this.updateSupportLog = this.updateSupportLog.bind(this);
       this.tog_edit_ticket = this.tog_edit_ticket.bind(this);
       this.fillTicket = this.fillTicket.bind(this);
       this.assignTechnician = this.assignTechnician.bind(this);
       this.getTechnician = this.getTechnician.bind(this);
       this.fillTechnician = this.fillTechnician.bind(this);
       this.supportCount = this.supportCount.bind(this);
       this.getUsers = this.getUsers.bind(this);
    }  

    componentDidMount(){
        this.supportCount()
      this.props.setBreadcrumbItems("Customer Service", this.state.breadcrumbItems);
      this.vieallSupportPriority();
      this.viewsupportCategory();
        this.getTechnician()
        this.getUsers()

       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/log`, requestOptions)
        .then(response => response.json())
        .then(data => {
            var array = []
                for(let i=0; i< data.body.length; i++){
                    array.push({
                        support_log_id: data.body[i].id,
                        ticket_name: data.body[i].ticket_name,
                        ticket_description: data.body[i].ticket_description,
                        user_id: data.body[i].user_id,
                        ticket_status: data.body[i].ticket_status,
                        customer_remarks: data.body[i].customer_remarks,
                        technician_remarks: data.body[i].technician_remarks,
                        technician_name: data.body[i].first_name + " " + data.body[i].last_name,
                        complition_date: data.body[i].complition_date,
                        priority_name: data.body[i].priority_name,
                        category_name: data.body[i].category_name,
                        ticket_assignment: data.body[i].ticket_assignment,
                        created_at: data.body[i].created_at,
                        updated_at: data.body[i].updated_at,
                        button: 
                            <div>
                                <Button type="button"
                                    onClick={
                                        () => this.fillTicket(data.body[i])
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
                                <Button type="button"
                                onClick={
                                    () => this.fillTechnician(data.body[i].id, data.body[i].ticket_assignment)
                                }
                                    style={
                                        {marginRight: 10}
                                    }
                                    color="success"
                                    className="waves-effect waves-light">
                                    <i className="fas fa-user"></i>
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

         this.supportCount()
    }

    viewSupportLog(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/log`, requestOptions)
        .then(response => response.json())
        .then(data => {
            var array = []
                for(let i=0; i< data.body.length; i++){
                    array.push({
                        support_log_id: data.body[i].id,
                        ticket_name: data.body[i].ticket_name,
                        ticket_description: data.body[i].ticket_description,
                        user_id: data.body[i].user_id,
                        ticket_status: data.body[i].ticket_status,
                        priority_name: data.body[i].priority_name,
                        category_name: data.body[i].category_name,
                        technician_name: data.body[i].first_name + " " + data.body[i].last_name,
                         customer_remarks: data.body[i].customer_remarks,
                        technician_remarks: data.body[i].technician_remarks,
                        complition_date: data.body[i].complition_date,
                        ticket_assignment: data.body[i].ticket_assignment,
                        created_at: data.body[i].created_at,
                        updated_at: data.body[i].updated_at,
                        button: 
                            <div>
                                <Button type="button"
                                    onClick={
                                        () => this.fillTicket(data.body[i])
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
                                <Button type="button"
                                onClick={
                                     () => this.fillTechnician(data.body[i].id, data.body[i].ticket_assignment)
                                }
                                    style={
                                        {marginRight: 10}
                                    }
                                    color="success"
                                    className="waves-effect waves-light">
                                    <i className="fas fa-user"></i>
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

    createSupportLog(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token") );
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "ticket_name": this.state.ticket_name,
        "ticket_description": this.state.ticket_description,
        "category_id": this.state.category_id,
        "priority_id": this.state.priority_id,
        "ticket_assignment": this.state.ticket_assignment,
        "ticket_status": this.state.ticket_status,
        "customer_remarks": this.state.customer_remarks,
        "technician_remarks": this.state.technician_remarks,
        "complition_date": this.state.complition_date,
        "user_id": this.state.user_id
        });
        console.log(raw)

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/log/create`, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.setState({
                ticket_name: '',
                ticket_description: '',
                category_id: '',
                priority_id: '',
                ticket_assignment: '',
                ticket_status: '',
                customer_remarks: '',
                technician_remarks: '',
                complition_date: '',
                user_id: ''
            })
            this.tog_create_ticket()
            this.viewSupportLog()
        })
        .catch(error => console.log('error', error));
    }

    deleteSupportLog(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/log/` + this.state.id, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.viewSupportLog()
        })
        .catch(error => console.log('error', error));
    }

    updateSupportLog(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "ticket_name":this.state.ticket_name,
        "ticket_description": this.state.ticket_description,
        "category_id": this.state.category_id,
        "priority_id": this.state.priority_id,
        "ticket_assignment": this.state.ticket_assignment,
        "ticket_status": this.state.ticket_status,
        "customer_remarks": this.state.customer_remarks,
        "technician_remarks": this.state.technician_remarks,
        "complition_date": this.state.complition_date,
        "user_id": this.state.user_id
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/log/create/` + this.state.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.supportCount()
            if(result.statusCode == "200"){
                this.tog_edit_ticket()
                this.viewSupportLog()
                this.setState({
                    ticket_name: '',
                    ticket_description: '',
                    category_id: '',
                    priority_id: '',
                    ticket_assignment: '',
                    ticket_status: '',
                    customer_remarks: '',
                    technician_remarks: '',
                    complition_date: '',
                    user_id: ''
                })
            }else{
                alert("Updation Failed")
            }
        })
        .catch(error => console.log('error', error));
    }

    fillTicket = (ticket) => {
        this.setState({
            id: ticket.id,
            ticket_name: ticket.ticket_name,
            ticket_description: ticket.ticket_description,
            category_id: ticket.category_id,
            priority_id: ticket.priority_id,
            ticket_assignment: ticket.ticket_assignment,
            ticket_status: ticket.ticket_status,
            customer_remarks: ticket.customer_remarks,
            technician_remarks: ticket.technician_remarks,
            complition_date: ticket.complition_date,
            user_id: ticket.user_id
        })
        this.tog_edit_ticket();
    }

    fillTechnician = (id,ticket_assignment) => {
        this.setState({
            support_log_id: id,
            ticket_assignment: ticket_assignment,
        })
        this.tog_technician();
    }

     viewsupportCategory() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${url}/category/support`, requestOptions).then(response => response.json()).then(data => {
            var array = []
            for (let i = 0; i < data.body.length; i++) {
                array.push({
                    id: data.body[i].id,
                    category_name: data.body[i].category_name,
                    category_description: data.body[i].category_description,
                    category_status: data.body[i].category_status,
                    created_at: data.body[i].created_at,
                    updated_at: data.body[i].updated_at,

                })
            }
            this.setState({category: array})
            console.log(this.state.category)
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

        fetch(`http://${url}/priority/support`, requestOptions).then(response => response.json()).then(data => {
            var array = []
            for (let i = 0; i < data.body.length; i++) {
                array.push({
                    id: data.body[i].id,
                    priority_name: data.body[i].priority_name,
                    priority_description: data.body[i].priority_description,
                    priority_status: data.body[i].priority_status,
                    created_at: data.body[i].created_at,
                    updated_at: data.body[i].updated_at,
                })
            }
            this.setState({priority: array})
            console.log(this.state.priority)
        }).catch(error => console.log('error', error));
    }

     changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log("cat pri",this.state.category_id, this.state.priority_id)
    }

    getTechnician(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://${url}/technicians`, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                technician: result.body
            })
        })
        .catch(error => console.log('error', error));
    }

    assignTechnician(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "ticket_assignment": this.state.ticket_assignment
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/log/assignment/` + this.state.support_log_id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.tog_technician()
            this.viewSupportLog()
            this.setState({
                ticket_assignment: ''
            })
            console.log("abc", result)
        })
        .catch(error => console.log('error', error));
    }

    supportCount(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "  + localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`http://${url}/support/count`, requestOptions)
        .then(response => response.json())
        .then(result => {
            var completed = '';
            var newCounts = '';
            var running = '';
            var open = '';
            var index = result.body.findIndex(e => e.ticket_status == "Completed")
            console.log("indexx",index)
            if(index != -1){
                completed = result.body[index].count
            }else{
                completed = 0
            }

            var index = result.body.findIndex(e => e.ticket_status == "Open")
            if(index != -1){
                open = result.body[index].count
            }else{
                open = 0
            }

            var index = result.body.findIndex(e => e.ticket_status == "Running")
            if(index != -1){
                running = result.body[index].count
            }else{
                running = 0
            }

            var index = result.body.findIndex(e => e.ticket_status == "New")
            if(index != -1){
                newCounts = result.body[index].count
            }else{
                newCounts = 0
            }

            this.setState({
                completedCount: completed,
                openCount: open,
                newCount: newCounts,
                runningCount: running
            })
        })
        .catch(error => console.log('error', error));
    }

    getUsers(pageNo) {
        if(pageNo=="undefined"){
            pageNo=pageNo-1;
        }
        //console.log("Currant Page: ",pageNo, "LastPage",this.state.lastPage,this.state.pageToken[pageNo])
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        var urll = `http://${url}/endusers/all`
        fetch(urll, {
            method: 'GET',
            headers: myHeaders,

        })
            .then((response) => response.json())
            .then(data => {
                var array = []
                for (let i = 0; i < data.body.length; i++) {
                    array.push({
                        sub: data.body[i].sub,
                        Username: data.body[i].Username,
                        given_name: data.body[i].given_name,
                        family_name: data.body[i].family_name,
                    })
                }
                this.setState({ users: array })

            })
    }

      tog_technician() {
        this.setState(prevState => ({
            modal_technician: !prevState.modal_technician,
            
        }));
    }
      tog_edit_ticket() {
        this.setState(prevState => ({
            modal_edit_ticket: !prevState.modal_edit_ticket
        }));
    }

    tog_create_ticket(){
        this.setState(prevState => ({
            modal_create_ticket: !prevState.modal_create_ticket
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
                    label: 'User Name',
                    field: 'user_id',
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
                    width: 270
                },
                {
                    label: 'Assign Technician',
                    field: 'technician_name',
                    sort: 'asc',
                    width: 270
                },
                 {
                    label: 'Customer Remark',
                    field: 'customer_remarks',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Technician Remark',
                    field: 'technician_remarks',
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
                    label: 'Complition Date',
                    field: 'complition_date',
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
                        this.deleteSupportLog()
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
                            
                                <h5>Open</h5>
                                <h5>{this.state.openCount}</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#58db83"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                            
                                <h5>New</h5>
                                <h5>{this.state.newCount}</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#29bbe3"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                                
                                <h5>Running</h5>
                                <h5>{this.state.runningCount}</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card className="mini-stat" style={{backgroundColor: "#f1734f"}}>
                            <CardBody className="mini-stat-img">
                            <div className='mini-stat-icon'>
                            
                            </div>
                        
                                <h5>Completed</h5>
                                <h5>{this.state.completedCount}</h5>
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
                            () => this.tog_create_ticket()
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
                            Assign Technician
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Assign Ticket To</Label>
                                <Col sm="10">
                                    <select className="form-control" name='ticket_assignment'
                                        value={
                                            this.state.ticket_assignment
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        {this.state.technician.map((cat)=> (
                                        <option value={cat.id}>{cat.first_name}  {cat.last_name}</option>
                                    ))}
                                    </select>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_technician
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.assignTechnician()
                                }
                                className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>

                {/* Create new ticket */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_create_ticket
                        }
                        toggle={
                            this.tog_create_ticket
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_create_ticket
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                             <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Ticket Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="ticket_name" type="text"
                                        value={
                                            this.state.ticket_name
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Ticket Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="ticket_description" type="text"
                                        value={
                                            this.state.ticket_description
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Username</Label>
                                <Col sm="10">
                                    <select className="form-control" name='user_id'
                                        value={
                                            this.state.user_id
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        {
                                            this.state.users.map((user) => (
                                                <option value={user.Username}>{user.Username}</option>
                                            ))
                                        }
                                    </select>
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
                                    <option value="">Select</option>
                                    {this.state.category.map((cat)=> (
                                        <option value={cat.id}>{cat.category_name}</option>
                                    ))}
                                        
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Priority</Label>
                                <Col sm="10">
                                    <select className="form-control" name='priority_id'
                                        value={
                                            this.state.priority_id
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                    <option value="">Select</option>
                                  {this.state.priority.map((cat)=> (
                                        <option value={cat.id}>{cat.priority_name}</option>
                                    ))}
                                        
                                    </select>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Customer Remark</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="customer_remarks" type="text"
                                        value={
                                            this.state.customer_remarks
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Technician Remark</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="technician_remarks" type="text"
                                        value={
                                            this.state.technician_remarks
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Assign Ticket To</Label>
                                <Col sm="10">
                                    <select className="form-control" name='ticket_assignment'
                                        value={
                                            this.state.ticket_assignment
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option value="">Select</option>
                                        {this.state.technician.map((cat)=> (
                                        <option value={cat.id}>{cat.first_name}  {cat.last_name}</option>
                                    ))}
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Ticket Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='ticket_status'
                                        value={
                                            this.state.ticket_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Status</option>
                                        <option value="Open">Open</option>
                                        <option value="New">New</option>
                                        <option value="Running">Running</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Complition Date</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="complition_date" type="date"
                                        value={
                                            this.state.complition_date
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_create_ticket
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.createSupportLog()
                                }
                                className="waves-effect waves-light">Add Ticket</Button>
                        </ModalFooter>
                    </Modal>
                </Row>

                 {/* Update ticket */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_edit_ticket
                        }
                        toggle={
                            this.tog_edit_ticket
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_edit_ticket
                        }>
                            Edit Details
                        </ModalHeader>
                        <ModalBody>
                             <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Ticket Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="ticket_name" type="text"
                                        value={
                                            this.state.ticket_name
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Ticket Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="ticket_description" type="text"
                                        value={
                                            this.state.ticket_description
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Username</Label>
                                <Col sm="10">
                                    <select className="form-control" name='user_id'
                                        value={
                                            this.state.user_id
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        {
                                            this.state.users.map((user) => (
                                                <option value={user.Username}>{user.Username}</option>
                                            ))
                                        }
                                    </select>
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
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Priority</Label>
                                <Col sm="10">
                                    <select className="form-control" name='priority_id'
                                        value={
                                            this.state.priority_id
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                  {this.state.priority.map((cat)=> (
                                        <option value={cat.id}>{cat.priority_name}</option>
                                    ))}
                                        
                                    </select>
                                </Col>
                            </FormGroup>
                             <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Customer Remark</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="customer_remarks" type="text"
                                        value={
                                            this.state.customer_remarks
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Technician Remark</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="technician_remarks" type="text"
                                        value={
                                            this.state.technician_remarks
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Ticket Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='ticket_status'
                                        value={
                                            this.state.ticket_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Status</option>
                                        <option value="Open">Open</option>
                                        <option value="New">New</option>
                                        <option value="Running">Running</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Complition Date</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="complition_date" type="date"
                                        value={
                                            this.state.complition_date
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_edit_ticket
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.updateSupportLog()
                                }
                                className="waves-effect waves-light">Save Changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
               
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CustomerService);