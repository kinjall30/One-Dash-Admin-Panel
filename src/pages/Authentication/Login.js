import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Alert,
    Button
} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {checkLogin, clearErrorLogin, clearError} from '../../store/actions';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import logodark from "../../assets/logo1.png";
// import axios from 'axios'
// import email from '../project management/email';
// import url from '../../helpers/apiUrl';


class Pageslogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    // handleSubmit(event, values) {

    //     this.props.checkLogin(values.email, values.password, this.props.history);
    // }

    handleSubmit = async (e, values) => {
        e.persist();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"email": this.state.email, "password": this.state.password});
        console.log(raw)
        fetch("http://44.196.105.0:3000/adminusers/login", {
            method: 'POST',
            headers: myHeaders,
            body: raw
        }).then((response) => response.json()).then(data => {
            console.log(data.status)
            if (data.statusCode == "200") { // window.location.assign("/dashboard");
                this.props.history.push('/dashboard');
                localStorage.setItem("token", data.body.accessToken)
                // sessionStorage.clear()
                localStorage.setItem("role", data.body.user[0].role)
                console.log(localStorage.getItem("role" + "login console"))
            }else{
                this.props.checkLogin(values.email, values.password, this.props.history);
            }

            this.setState({items: data}) 
        })
    }
    componentDidMount() {

    }

    render() {

        return (
            <React.Fragment>
                <div className="account-pages my-5 pt-sm-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="overflow-hidden">
                                    <CardBody className="pt-0">
                                        <h3 className="text-center mt-4">
                                            <Link to="\" className="logo logo-admin"><img src={logodark}
                                                    height="30"
                                                    alt="logo"/></Link>
                                        </h3>
                                        <div className="p-3">
                                            <h4 className="text-muted font-size-18 mb-1 text-center">Welcome To One Dash !</h4>
                                            {
                                            this.props.user && <Alert color="success">
                                                Your Login is successfull.</Alert>
                                        }

                                            {
                                            this.props.loginError && <Alert color="danger">
                                                {
                                                this.props.loginError
                                            }</Alert>
                                        }
                                            <AvForm className="form-horizontal mt-4"
                                                onValidSubmit={
                                                    this.handleSubmit
                                            }>

                                                <label htmlFor="email">Email</label>
                                                <AvField name="email" placeholder="Enter Email"
                                                    value={
                                                        this.state.email
                                                    }
                                                    onChange
                                                    ={this.changeHandler}
                                                    type="email"/>

                                                <label htmlFor="userpassword">Password</label>
                                                <AvField name="password" type="password"
                                                    value={
                                                        this.state.password
                                                    }
                                                    onChange
                                                    ={this.changeHandler}
                                                    placeholder="Enter password"/>

                                                <div className="form-group row mt-4">
                                                    <Col xs="12" className="text-right">
                                                        <Button color="primary" className="w-md waves-effect waves-light"
                                                            onSubmit={
                                                                this.handleSubmit
                                                            }
                                                            type="submit"
                                                            style={
                                                                {
                                                                    marginRight: 60,
                                                                    width: 250
                                                                }
                                                        }>Log In</Button>
                                                    </Col>
                                                </div>

                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const {user, loginError, loading} = state.Login;
    return {user, loginError, loading};
}




export default withRouter(connect(mapStatetoProps, {checkLogin, clearErrorLogin, clearError})(Pageslogin));
