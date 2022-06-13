import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Alert, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkLogin, clearErrorLogin, clearError } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logodark from "../../assets/logo1.png";

class Pageslogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "masud@girofintech.com",
            password: "Admin@123",
            items: [],
            DataisLoaded: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchApi = this.fetchApi.bind(this);
    }

    handleSubmit(event, values) {
        this.props.checkLogin(values.username, values.password, this.props.history);
    }

    fetchApi(){

    }

    componentDidMount() {
        this.props.clearErrorLogin();
        this.props.clearError();
        fetch("")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })

    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
            <React.Fragment>
                <div className="account-pages my-5 pt-sm-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="overflow-hidden">
                                    <CardBody className="pt-0">
                                        <h3 className="text-center mt-4">
                                            <Link to="\" className="logo logo-admin"><img src={logodark} height="30" alt="logo" /></Link>
                                        </h3>
                                        <div className="p-3">
                                            <h4 className="text-muted font-size-18 mb-1 text-center">Welcome To One Dash !</h4>
                                            {/* <p className="text-muted text-center">Sign in to continue to Lexa.</p> */}
                                            {this.props.user && <Alert color="success">
                                                Your Login is successfull.</Alert>}

                                            {this.props.loginError && <Alert color="danger">
                                                {this.props.loginError}</Alert>}
                                            <AvForm className="form-horizontal mt-4" onValidSubmit={this.handleSubmit}>

                                                <label htmlFor="username">Email</label>
                                                <AvField name="username" placeholder="Enter Email" value={ this.state.username }  type="email" />

                                                <label htmlFor="userpassword">Password</label>
                                                <AvField name="password" type="password" value={ this.state.password } placeholder="Enter password" />

                                                <div className="form-group row mt-4">
                                                    {/* <Col xs="6">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                        </div>
                                                    </Col> */}
                                                    <Col xs="12" className="text-right">
                                                        <Button color="primary" className="w-md waves-effect waves-light" type="submit" style ={{marginRight: 60, width: 250}}>Log In</Button>
                                                    </Col>
                                                </div>
                                                {/* <div className="form-group mb-0 row">
                                                    <Col xs="12" className="mt-4">
                                                        <Link to="/forget-password" className="text-muted"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                                                    </Col>
                                                </div> */}
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                                {/* <div className="mt-5 text-center">
                                    <p>Don't have an account ? <Link to="/register" className="text-primary"> Signup Now </Link></p>
                                    <p>© 2018 - 2020 Lexa. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { user, loginError, loading } = state.Login;
    return { user, loginError, loading };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, clearErrorLogin, clearError })(Pageslogin));




