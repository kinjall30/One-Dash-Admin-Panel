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

class ComplainDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Complain", link : "#" },
                { title : "Details", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Complains", this.state.breadcrumbItems);
    }

  
    render() {
        

        return (
            <React.Fragment>
                <div>
                    <h4>Email Change</h4>
                </div>
                <div>
                <Row>
                    <FormGroup >
                        <Label className="col-sm-2 col-form-label">Assign</Label>
                        <Col sm="12">
                            <select className="form-control">
                                <option>Select</option>
                                <option>Atik Khan</option>
                                <option>Kinjal Prajapati</option>
                            </select>
                        </Col>
                    </FormGroup>  
                    <FormGroup >
                    <Label className="col-sm-2 col-form-label">Status</Label>
                    <Col sm="12">
                        <select className="form-control">
                            <option>Select</option>
                            <option>In Progress</option>
                            <option>Not Completed</option>
                            <option>Completed</option>
                        </select>
                    </Col>
                </FormGroup> 
                <FormGroup >
                    <Label className="col-sm-2 col-form-label">Prority</Label>
                    <Col sm="12">
                        <select className="form-control">
                            <option>Select</option>
                            <option>Urgent</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </Col>
                </FormGroup>
                </Row>
                </div>
                <div>
                   <h5>Description</h5>
                   <p>Couldn't be able to change email address.</p>
                </div> 
                <div>
                <Button type="button"  style = {{marginRight: 10, marginTop: 100}} color="primary" className="waves-effect waves-light">Save Changes</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(ComplainDetails);