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
        textAline: "center"
    }

        return (
            <React.Fragment>
                <Row>
                    <Link to='emailmarketing'>
                        <div>
                            <Col>
                                <Card  style={cardStyle}>
                                    <CardBody>
                                        Email
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    </Link>
           
                    <Link to='smsmarketing'>
                    <div>
                        <Col>
                            <Card  style={cardStyle}>
                                <CardBody>
                                    SMS
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    </Link>
                    <Link to='appmarketing'>
                    <div >
                        <Col>
                            <Card style={cardStyle}>
                                <CardBody>
                                    In-app
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    </Link>
                    <Link to='websitemarketing'>
                    <div >
                        <Col>
                            <Card style={cardStyle}>
                                <CardBody>
                                    Browser
                                </CardBody>
                            </Card>
                        </Col>
                    </div>
                    </Link>
                    <Link to='whatsappmarketing'>
                        <Col >
                            <Card style={cardStyle}>
                                <CardBody>
                                        Whatsapp
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