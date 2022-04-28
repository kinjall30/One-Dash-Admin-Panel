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
        

        return (
            <React.Fragment>
                <Row>
                    <Col md="6" lg="6" xl="3">
                        <Card>
                            <CardBody>
                                Email
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="3">
                        <Card>
                            <CardBody>
                                SMS
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="3">
                        <Card>
                            <CardBody>
                                In-app
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="3">
                        <Card>
                            <CardBody>
                                Browser
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="3">
                        <Card>
                            <CardBody>
                                whatsapp
                            </CardBody>
                        </Card>
                    </Col>
                </Row> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Marketing);