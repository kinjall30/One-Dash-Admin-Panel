import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardText,
    CardImg,
    CardImgOverlay,
    CardHeader,
    CardFooter,
    CardDeck,
    CardLink,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Label,
    Input,
    InputGroupAddon,
    InputGroup,
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Plans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Plans", link : "#" },
               
            ],
            modal_standard: false, 
            modal_plan: false,
           
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_plan = this.tog_plan.bind(this);
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Subscription Plans", this.state.breadcrumbItems);
    }
    
    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }
    
    tog_plan() {
        this.setState(prevState => ({
            modal_plan: !prevState.modal_plan
        }))
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target.element.features.value);
        // console.log(event.target.features.value);
        console.log(event.target.planame.value);
    }
    render() {
     

        return (
         
            <React.Fragment>
                <Button color="primary" style={{marginRight: 10}}  onClick={this.tog_plan} className="btn btn-primary waves-effect waves-light">Add Plan</Button>
                <Button color="danger"  className="btn btn-primary waves-effect waves-light"> Remove Plan</Button>
                 <Row style={{marginTop:10}}>
                        <Col md="6">
                            <div className="card card-body">
                                <div className=" card-title text-center">
                                    <h3>Shoppable</h3>
                                    <p>$ 29.99/month</p>
                                    <p></p>
                                    <p>Free trial for 14 days</p>
                                </div>
                                
                                <CardText style={{paddingLeft: '50px'}}>
                                    <p>3 Gb allocation space</p>
                                    <p>Hotspots: static, dynamic and linked</p>
                                    <p>Editable overlays</p>
                                    <p>Tracking and AI based recognition</p>
                                    <p>Choice of player representation</p>
                                    <p>Branching by video and audio</p>
                                    <p>Shoppable video</p>
                                    <p>Video analytics</p>
                                    <p>Product analytics</p>
                                    <p>Support service</p>
                                    <p>Team</p>
                                </CardText>
                                <Button color="primary" style={{marginBottom: 10}}  onClick={this.tog_standard} className="btn btn-primary waves-effect waves-light">Add Features</Button>
                                <Button color="primary" className="btn btn-primary waves-effect waves-light">Submit</Button>
                            </div>
                            
                        </Col>
                        <Col md="6">
                        <div className="card card-body">
                                <div className=" card-title text-center">
                                    <h3>Unlimited</h3>
                                    <p>$ 599/month</p>
                                    
                                </div>
                                
                                <CardText style={{paddingLeft: '50px', marginTop: '35px'}}>
                                    <p>3 Gb allocation space</p>
                                    <p>Hotspots: static, dynamic and linked</p>
                                    <p>Editable overlays</p>
                                    <p>Tracking and AI based recognition</p>
                                    <p>Choice of player representation</p>
                                    <p>Branching by video and audio</p>
                                    <p>Shoppable video</p>
                                    <p>Video analytics</p>
                                    <p>Product analytics</p>
                                    <p>Support service</p>
                                    <p>Team</p>
                                </CardText>
                                <Button color="primary" style={{marginBottom: 10}}  onClick={this.tog_standard} className="btn btn-primary waves-effect waves-light">Add Features</Button>
                                <Button color="primary" className="btn btn-primary waves-effect waves-light">Submit</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row >
                        <Col sm="6" md="3" className="mt-4">
                            <Modal
                                isOpen={this.state.modal_standard}
                                toggle={this.tog_standard}
                                autoFocus={true}
                                
                            > 
                                                
                                <ModalHeader toggle={this.tog_standard}>
                                    Edit Payment Gateway Settings
                                </ModalHeader >
                              
                                <ModalBody>
                                    {/* <p>Payment to edit</p> */}
                                    <FormGroup row>
                                        <Label className="col-sm-2 col-form-label">Select</Label>
                                        <Col sm="10">
                                            <select className="form-control">
                                                <option>Shoppable </option>
                                                <option>Unlimited</option>
                                            </select>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-number-input" className="col-sm-2 col-form-label">Allocation Space</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="number" defaultValue="42" id="example-number-input"/>
                                        </Col>
                                    </FormGroup>
                                        <p>Hotspots: static, dynamic and linked</p>
                                        <p>Editable overlays</p>
                                        <p>Tracking and AI based recognition</p>
                                        <p>Choice of player representation</p>
                                        <p>Branching by video and audio</p>
                                        <p>Shoppable video</p>
                                        <p>Video analytics</p>
                                        <p>Product analytics</p>
                                        <p>Support service</p>
                                        <p>Team</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                    <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                                </ModalFooter>                                              
                            </Modal>
                                            
                        </Col>
                    </Row>

                    <Row >
                        <Col sm="6" md="3" className="mt-4">
                            <Modal
                                isOpen={this.state.modal_plan}
                                toggle={this.tog_plan}
                                autoFocus={true}
                                
                            > 
                                                
                                <ModalHeader toggle={this.tog_plan}>
                                   Enter Plans Details
                                </ModalHeader >
                              
                                <ModalBody>
                                    {/* <p>Payment to edit</p> */}
                                    <FormGroup row>
                                        <Label for="example-text-input" className="col-sm-2 col-form-label">Plan Name:</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" name="planame" id="example-text-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-text-input" className="col-sm-2 col-form-label">Features:</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" name="features" id="example-text-input"/>
                                        </Col>
                                    </FormGroup>
                                    <Button type="button" color="secondary" className="waves-effect" >Add Features</Button>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_plan}>Close</Button>
                                    <Button type="button" color="primary" className="waves-effect waves-light" onClick={this.handleSubmit}>Save changes</Button>
                                </ModalFooter>                                              
                            </Modal>
                                            
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Plans);