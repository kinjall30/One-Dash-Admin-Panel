import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class WhatsappMarketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Whatsapp", link : "#" },
                { title : "Marketing", link : "#" },
            ],
            
        }
    }  
       
    componentDidMount(){
        this.props.setBreadcrumbItems("Whatsapp Marketing", this.state.breadcrumbItems);
      }
  
    render() {
 
        return (
            <React.Fragment>
                <Row> 
                    <Col md='3'>
                        <Card>
                            <CardBody>
                                <h4>Active Campaign</h4>
                                <h5>5</h5>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                    <Card>
                        <CardBody>
                            <h4>In-Active Campaign</h4>
                            <h5>3</h5>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='3'>
                <Card>
                    <CardBody>
                        <h4>Total Messages</h4>
                        <h5>200</h5>
                    </CardBody>
                </Card>
            </Col>
            <Col md='3'>
            <Card>
                <CardBody>
                    <h4>Effect</h4>
                    <h5>50%</h5>
                </CardBody>
            </Card>
        </Col>
                </Row>
                <p></p>
                <h1>Start a new Campaign</h1>
                <p></p>
                <Row>
                   
                    <Col md="6">
                        <FormGroup>
                            <input type='type' className="form-control" required placeholder='Campaign Name'></input>
                        </FormGroup>
                        <FormGroup>
                            <input type='number' className="form-control" required placeholder='Enter Phone Numbers'></input>
                        </FormGroup>
                        <FormGroup>
                            <div>
                                <textarea required placeholder='Enter Message' className="form-control" rows="5"></textarea>
                            </div>
                        </FormGroup>
                        <Button color="primary">Send</Button>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(WhatsappMarketing);