import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Media,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../component/Layout/Menus/search-bar";
import { MDBDataTable } from 'mdbreact';

//Import Images
import imgdark from "../../assets/images/users/user-1.jpg";


//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Components
import CardUser from "./card";

class Userprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "User Management", link : "#" },
                { title : "User Profile", link : "#" },
            ],
            users : [
                { id : 1, imgUrl : imgdark, designation : "Creative Director", name : "Kinjal Prajapati", desc : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                email : "kinjal@gmail.com"
                },
                
            ]
            
        }
    }

    handleShow = ()=>{
        this.setState({
            isActive: true
        })
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("User Management", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                <Col xs="4">
                    <SearchBar/>
                </Col>
                <Row>
                    <Col lg="5">
                    <Row style={{minWidth: "100vh", width: "100vh"}}>
                        <CardUser users={this.state.users}/>
                    </Row>  
                        
                     
                            {/* <Media className="mb-4">
                                <img className="d-flex mr-3 rounded-circle avatar-sm" src={imgdark} alt="Generic placeholder"/>
                                <Media className="align-self-center" body>
                                    <h4 className="font-size-14 m-0">Kinjal Prajapati</h4>
                                    <small className="text-muted">kinjal@gmail.com</small>
                                </Media>  
                            </Media>
                            <h4 className="font-size-14 m-0">New York, USA</h4> */}
                           
                            
                           
                        {/* <div className="float-right">
                            {this.state.isActive ? <h1>Hello React</h1> : null }
                            <Button onClick={this.handleShow} type="button" color="info" className="btn btn-primary waves-effect waves-light">Show Details</Button>
                        </div> */}
                    </Col>

                   
                    <Col lg="7">
                    <Card>
                        <CardBody>
                        <h4 className="mt-0 font-size-26">General Information</h4>
                        <Row>
                            <Col xs="6">
                                <address>
                                    <strong>Customer ID: 721</strong><br/>
                                    Kinjal <br/>
                                    Prajapati<br/>
                                </address>
                            </Col>
                            <Col xs="6" className="text-right">
                                <address>
                                    <strong>Subscribe: yes</strong><br/>
                                    Plan: Monthly<br/>
                                    Plan Details: Unlimited<br/>
                                </address>
                            </Col>
                        </Row>
                        <h4 className="mt-0 font-size-26">Project Overview</h4>
                        <Row>
                       
                            <Col xs="6">
                                <address>
                                    Total Project: 6 <br/>
                                    Storage Use: 30GB<br/>
                                </address>
                            </Col>
                            <Col xs="6" className="text-right">
                                <address>
                                    Products: 12<br/>
                                    Videos: 16<br/>
                                    Images: 26<br/>
                                    Audio: 10<br/>
                                </address>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="6" className="mt-4">
                                <address>
                                    <strong>Payment Method:</strong><br/>
                                    Visa ending **** 4242<br/>
                                    kinjal@email.com
                                </address>
                            </Col>
                            <Col xs="6" className="mt-4 text-right">
                                <address>
                                    <strong>Start Date:</strong><br/>
                                    October 7, 2021<br/><br/>
                                    <strong>End Date:</strong><br/>
                                    November 7, 2021<br/><br/>
                                </address>
                            </Col>
                        </Row>
                        </CardBody>
                    </Card>
                    </Col>  
                </Row> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Userprofile);
