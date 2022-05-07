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
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Marketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Marketing", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Marketing", this.state.breadcrumbItems);
    }

  
    render() {
        
    const cardStyle ={
        height: "100px",
        color: "white",
        width: "300px",
        fontSize: "20px",
        textAline: "center",
        backgroundColor: "#7a6fbe"
    }

        return (
            <React.Fragment>
                <Row>
                    <Link to='emailmarketing'>
                        <div>
                            <Col>
                                <Card className="mini-stat" style={cardStyle}>
                                    <CardBody className="mini-stat-img">
                                        <div className='mini-stat-icon'>
                                            <i className="fas fa-envelope float-right"></i>
                                        </div>
                                        <h5>Email</h5>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    </Link>
           
                    <Link to='smsmarketing'>
                    <div>
                        <Col>
                            <Card  className="mini-stat" style={cardStyle}>
                                <CardBody className="mini-stat-img">
                                    <div className='mini-stat-icon'>
                                        <i className="far fa-comment-alt float-right"></i>
                                    </div>
                                    <h5>SMS</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    </Link>
                    <Link to='appmarketing'>
                    <div >
                        <Col>
                            <Card  className="mini-stat" style={cardStyle}>
                                <CardBody className="mini-stat-img">
                                    <div className='mini-stat-icon'>
                                        <i className="fab fa-android float-right"></i>
                                    </div>
                                    <h5>In-app</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    </Link>
                    <Link to='websitemarketing'>
                    <div >
                        <Col>
                            <Card  className="mini-stat" style={cardStyle}>
                                <CardBody className="mini-stat-img">
                                    <div className='mini-stat-icon'>
                                        <i className="fab fa-chrome float-right"></i>
                                    </div>
                                    <h5>Browser</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    </Link>
                    <Link to='whatsappmarketing'>
                        <Col >
                            <Card  className="mini-stat" style={cardStyle}>
                                <CardBody className="mini-stat-img">
                                    <div className='mini-stat-icon'>
                                        <i className=" fas fa-comments float-right"></i>
                                    </div>
                                    <h5>Whatsapp</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </Link>
                </Row> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Marketing);