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
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Integration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Integration", link : "#" },
            ],
            modal_standard: false,  
        }
        this.tog_standard = this.tog_standard.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Integration", this.state.breadcrumbItems);
    }

    
    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
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

        const mainStyle = {
            display: "flex",
            justifyContent: "space-around",
        }

        const iconStyle={
         
        }

        return (
            <React.Fragment>
               <Row>
                    <Col >
                        <Card className="mini-stat" style={cardStyle}>
                            <CardBody className="mini-stat-img">
                                <div style={mainStyle}>
                                    <h3>Stripe</h3>
                                    <div style={iconStyle}>
                                        <Link onClick={this.tog_standard}> <i style={{color: "white"}}  className="ion ion-md-create"></i></Link>
                                        <Link> <i style={{color: "white"}} className="ti-trash"></i></Link>
                                    </div>  
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col >
                        <Card className="mini-stat" style={cardStyle}>
                            <CardBody className="mini-stat-img">
                                <div style={mainStyle}>
                                    <h3>BigCommerce</h3>
                                    <div style={iconStyle}>
                                        <Link onClick={this.tog_standard}> <i style={{color: "white"}} className="ion ion-md-create"></i></Link>
                                        <Link> <i style={{color: "white"}} className="ti-trash"></i></Link>
                                    </div> 
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mini-stat" style={cardStyle}>
                            <CardBody className="mini-stat-img">
                                <div style={mainStyle}>
                                    <h3>WooCommerce</h3>
                                    <div style={iconStyle}>
                                        <Link onClick={this.tog_standard}> <i style={{color: "white"}} className="ion ion-md-create"></i></Link>
                                        <Link> <i style={{color: "white"}} className="ti-trash"></i></Link>
                                    </div> 
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
               </Row> 
               
               
                <Row>
                        
                    <Modal
                        isOpen={this.state.modal_standard}
                        toggle={this.tog_standard}
                        autoFocus={true}
                        size = "lg"
                    >
                        <ModalHeader toggle={this.tog_standard}>
                            Edit Details
                        </ModalHeader>
                        <ModalBody>
                            <h3>Stripe</h3>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Customer Id</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="number" defaultValue="1" id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-search-input" className="col-sm-2 col-form-label">Username</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="search" defaultValue="TigerNixon" id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-email-input" className="col-sm-2 col-form-label">Email</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="email" defaultValue="abc@gmail.com"  id="example-email-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Secret Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" defaultValue="kjya26adh"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Publishable Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" defaultValue="pk_test_Xg1wD3wh0r3IkpZRoy9A8fUN" id="example-search-input"/>
                                </Col>
                            </FormGroup>                     
                        </ModalBody>
                        <ModalFooter>
                                <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                        </ModalFooter>                      
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Integration);