import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    FormGroup,
    Button
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class AppMarketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "In-app", link : "#" },
                { title : "Marketing", link : "#" },
            ],
            
        }
       
    } 
    componentDidMount(){
        this.props.setBreadcrumbItems("In-app Marketing", this.state.breadcrumbItems);
      } 
  
    render() {
        

        return (
            <React.Fragment>
            <Row> 
            <Col md='3' >
                <Card className="mini-stat" style={{backgroundColor: "#f5b225"}}>
                    <CardBody className="mini-stat-img">
                    <div className='mini-stat-icon'>
                    <i className="ti-export float-right"></i>
                    </div>
                    
                        <h5>Active Campaign</h5>
                        <h5>5</h5>
                    </CardBody>
                </Card>
            </Col>
            <Col md='3'>
            <Card className="mini-stat" style={{backgroundColor: "#58db83"}}>
                <CardBody className="mini-stat-img">
                <div className='mini-stat-icon'>
                <i className="ti-import float-right"></i>
                </div>
                
                    <h5>In-Active Campaign</h5>
                    <h5>3</h5>
                </CardBody>
            </Card>
        </Col>
        <Col md='3'>
        <Card className="mini-stat" style={{backgroundColor: "#29bbe3"}}>
            <CardBody className="mini-stat-img">
            <div className='mini-stat-icon'>
            <i className="ti-comment-alt float-right"></i>
            </div>
                
                <h5>Total Messages</h5>
                <p>                       </p>
                <h5>200</h5>
            </CardBody>
        </Card>
    </Col>
    <Col md='3'>
    <Card className="mini-stat" style={{backgroundColor: "#e83e8c"}}>
        <CardBody className="mini-stat-img">
        <div className='mini-stat-icon'>
        <i className="ti-wand float-right"></i> 
        </div>
       
            <h5>Effect</h5>
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

export default connect(null, { setBreadcrumbItems })(AppMarketing);