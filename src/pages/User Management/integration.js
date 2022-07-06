import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
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
import SearchBar from "../../component/Layout/Menus/search-bar";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class Integration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Integration", link : "#" },
            ],
            modal_standard: false,
            modal_standards: false,  
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_standards = this.tog_standards.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Integration", this.state.breadcrumbItems);
    }

    
    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }
    tog_standards() {
        this.setState(prevState => ({
          modal_standards: !prevState.modal_standards
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
                <Col xs="4">
                    <SearchBar/>
                </Col>

                <div style={{marginBottom: 20}}>
                    <h4>Kinjal Parajapati's Integration</h4>
                </div>
                <Col>
                    <Col >
                        <Card className="mini-stat" style={cardStyle}>
                            <CardBody className="mini-stat-img">
                                <div style={mainStyle}>
                                    <h3>Stripe</h3>
                                    <div style={iconStyle}>
                                        <Link onClick={this.tog_standard}> <i style={{color: "white"}} className="ti-eye"></i></Link>
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
                                        <Link onClick={this.tog_standards}> <i style={{color: "white"}} className="ti-eye"></i></Link>
                                    </div> 
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
        {/*
                    <Col >
                        <Card className="mini-stat" style={cardStyle}>
                            <CardBody className="mini-stat-img">
                                <div style={mainStyle}>
                                    <h3>BigCommerce</h3>
                                    <div style={iconStyle}>
                                        <Link onClick={this.tog_standard}> <i style={{color: "white"}} className="ti-eye"></i></Link>
                                    </div> 
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                     */} 
               </Col> 
          
               
                <Row>
                        
                    <Modal
                        isOpen={this.state.modal_standard}
                        toggle={this.tog_standard}
                        autoFocus={true}
                        size = "lg"
                    >
                        <ModalHeader toggle={this.tog_standard}>
                            Details
                        </ModalHeader>
                        <ModalBody>
                            
                            <FormGroup row>
                                <Label for="example-search-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="search" defaultValue="Stripe" id="example-search-input"/>
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
                                <Button type="button" color="primary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                
                        </ModalFooter>                      
                    </Modal>
                </Row>
                <Row>
                        
                    <Modal
                        isOpen={this.state.modal_standards}
                        toggle={this.tog_standards}
                        autoFocus={true}
                        size = "lg"
                    >
                        <ModalHeader toggle={this.tog_standards}>
                            Details
                        </ModalHeader>
                        <ModalBody>
                          
                           
                            <FormGroup row>
                                <Label for="example-search-input" className="col-sm-2 col-form-label">Shop Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="search" defaultValue="WooCommerce" id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Shop URL</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="url" defaultValue="https://vexprotech.wpcomstaging.com"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-url-input" className="col-sm-2 col-form-label">Consumer Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" defaultValue="ck_9ebaba2a5ee139308811b149c489c4e5696fc562"  id="example-url-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Consumer Secret</Label>
                                <Col sm="10">
                                    <Input className="form-control" type="text" defaultValue="cs_6caa188ec72f593bfd04f4e7796b3d0a82c57d26" id="example-search-input"/>
                                </Col>
                            </FormGroup>                     
                        </ModalBody>
                        <ModalFooter>
                                <Button type="button" color="primary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                
                        </ModalFooter>                      
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Integration);