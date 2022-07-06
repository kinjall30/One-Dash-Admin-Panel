import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    FormGroup,
    Label,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Modal,
    PaginationItem,
    PaginationLink

} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import SearchBar from "../../component/Layout/Menus/search-bar";

import SweetAlert from "react-bootstrap-sweetalert";

import { MDBDataTable } from 'mdbreact';

// Import datatable css
import "../Tables/datatables.scss";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class Enduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_edit: false,
            modal_add: false,
            modal_resetpassword: false,
            success_msg: false,
            hidden: true,
            password: '',
            newpassword: '',
            users: [],
            givenName: '',
            familyName: '',
            email: '',
            username: '',
            nextPagination: '',
            prevPagination: '',
            success_confirm: false,
            alert_confirm: false,
            dynamic_title: "",
            dynamic_description: "",
            pageToken: ["null"],
            currentPage: 0,
            lastPage:false,
        }
        this.tog_edit = this.tog_edit.bind(this);
        this.tog_add = this.tog_add.bind(this);
        this.tog_resetpassword = this.tog_resetpassword.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.fillUser = this.fillUser.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.fillUser2 = this.fillUser2.bind(this);
        this.previousPagination = this.previousPagination.bind(this);
        this.nextPaginations = this.nextPaginations.bind(this);
        this.pageChangeHandler = this.pageChangeHandler.bind(this);
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }

        this.getUsers(0);
    }

    getUsers(pageNo) {
        if(pageNo=="undefined"){
            pageNo=pageNo-1;
        }
        //console.log("Currant Page: ",pageNo, "LastPage",this.state.lastPage,this.state.pageToken[pageNo])
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        var url = 'http://44.196.105.0:3000/endusers?paginationToken=' + this.state.pageToken[pageNo]
        fetch(url, {
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
                        email: data.body[i].email,
                        email_verified: data.body[i].email_verified,
                        UserStatus: data.body[i].UserStatus,
                        UserCreateDate: data.body[i].UserCreateDate,
                        UserLastModifiedDate: data.body[i].UserLastModifiedDate,
                        button:
                            <div>
                                <Link to={{
                                    pathname: "/userdetails",
                                    state: {
                                        user: data.body[i]
                                    }
                                }}>
                                    <Button type="button"
                                        onClick={
                                            () => this.fillUser(data.body[i])
                                        }
                                        style={
                                            { marginRight: 10 }
                                        }
                                        color="primary"
                                        className="waves-effect waves-light">
                                        <i className="ion ion-md-arrow-round-forward"></i>
                                    </Button>
                                </Link>
                                <Button type="button" color="danger"
                                    onClick={
                                        () => this.setState({ alert_confirm: true, username: data.body[i].Username })
                                    }
                                    className="waves-effect waves-light"
                                    id="sa-warning"><i className="ti-trash"></i>
                                </Button>
                            </div>
                    })
                }
                var page_token = this.state.pageToken;

                if(data.paginationToken==undefined)
                {
                    this.setState({  lastPage:true })
                }
                else{
                 if (page_token.length > pageNo + 1) {}
                else {  page_token.push(data.paginationToken) }
                }
                
                this.setState({ users: array, pageToken: page_token, currentPage: pageNo })

            })
    }

    deleteUser() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": this.state.username
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers", requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ users: this.state.users.filter(user => user.Username != this.state.username) })
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



    updateUser() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
                    this.getUsers(0)
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

    updatePassword() {
        if (this.state.password !== this.state.newpassword) {
            return alert("Password do not match")
        }
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
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
                if (result.statusCode == 200) {
                    this.tog_resetpassword()
                    this.setState({
                        username: '',
                        password: '',
                        newpassword: ''
                    })
                }
                else {
                    alert(result.body)
                }

               
            })
            .catch(error => console.log('error', error));

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    previousPagination() {

        if (this.state.currentPage >= 1) {
            this.getUsers(this.state.currentPage - 1)
        } else {
            this.getUsers(0)
        }

    }

    nextPaginations(pageNo) {

        this.getUsers(this.state.currentPage + 1)
    }

    pageChangeHandler(pageNo) {
        this.getUsers(pageNo)
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
    tog_resetpassword() {
        this.setState(prevState => ({
            modal_resetpassword: !prevState.modal_resetpassword
        }));
    }

    render() {
        const { pageToken } = this.state
        var Page_Token = pageToken;
        if(Page_Token.length>3){
            //alert(Page_Token.slice(Page_Token/2,2))
            console.log(Page_Token.slice(Page_Token.length-5,-1))
        }
       

        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'sub',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Username',
                    field: 'Username',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'First Name',
                    field: 'given_name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Last Name',
                    field: 'family_name',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Email Verified',
                    field: 'email_verified',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Status',
                    field: 'UserStatus',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Created At',
                    field: 'UserCreateDate',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Updated At',
                    field: 'UserLastModifiedDate',
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
            rows: this.state.users
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
                        onConfirm={() => {
                            this.deleteUser()
                            this.setState({
                                success_confirm: true,
                                alert_confirm: false,
                                dynamic_title: "Deleted!",
                                dynamic_description: "User has been deleted."
                            })
                        }
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
                            onConfirm={() => this.setState({ success_confirm: false, alert_confirm: false })}
                        >
                            {this.state.dynamic_description}
                        </SweetAlert>
                    )
                        : null
                }
                <h1>One Dash Users Details</h1>

                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <MDBDataTable
                                    responsive
                                    bordered
                                    striped
                                    data={data}
                                    paging={false}
                                />
                                <Col lg="12">
                                    <Card>
                                        <CardBody>
                                            <nav aria-label="...">
                                                <ul className="pagination mb-0 justify-content-end">
                                                    <PaginationItem onClick={() => this.previousPagination()}>
                                                        <span className="page-link">Previous</span>
                                                    </PaginationItem>
                                                    {
                                                        pageToken.map((page, index) => {
                                                            return (
                                                                this.state.currentPage == index ?
                                                                    <PaginationItem active><PaginationLink onClick={() => this.pageChangeHandler(index)}>{index + 1}</PaginationLink></PaginationItem>
                                                                    :
                                                                    <PaginationItem ><PaginationLink onClick={() => this.pageChangeHandler(index)}>{index + 1}</PaginationLink></PaginationItem>

                                                            )
                                                        })
                                                    }
                                                    <PaginationItem>
                                                        {
                                                           this.state.lastPage ? null :<PaginationLink onClick={() => this.nextPaginations()}>Next</PaginationLink>
                                                        }
                                                        
                                                    </PaginationItem>
                                                </ul>
                                            </nav>
                                        </CardBody>
                                    </Card>
                                </Col>
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
                        size="lg"
                    >
                        <ModalHeader toggle={this.tog_edit}>
                            Edit Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">First Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" name="givenName" value={this.state.givenName} onChange={this.changeHandler} id="example-text-input" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Last Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" name="familyName" value={this.state.familyName} onChange={this.changeHandler} id="example-text-input" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                <Col sm="10">
                                    <Input className="form-control" type="hidden" name="username" id="example-text-input" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="email" name="email" value={this.state.email} onChange={this.changeHandler} id="example-search-input" />
                                </Col>
                            </FormGroup>

                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_edit}>Close</Button>
                            <Button type="button" color="primary" onClick={() => this.updateUser()} className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>
                    </Modal>
                </Row>

                {/* Reset Password Form */}
                <Row>
                    <Modal
                        isOpen={this.state.modal_resetpassword}
                        toggle={this.tog_resetpassword}
                        autoFocus={true}
                        size="lg"
                    >
                        <ModalHeader toggle={this.tog_resetpassword}>
                            Reset Password
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Username</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="username" disabled value={this.state.username} type="text" id="example-url-input" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Create New Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="password" type="password" value={this.state.password} onChange={this.changeHandler} id="example-url-input" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Confirm Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="newpassword" value={this.state.newpassword} type="password" onChange={this.changeHandler} id="example-url-input" />
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                            <Button type="button" color="primary" className="waves-effect waves-light" onClick={() => this.updatePassword()}>Save</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Enduser);
