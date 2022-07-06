import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
  } from "reactstrap";

import { connect } from "react-redux";
// import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import DonutChart from "../AllCharts/apex/dountchart";

class Dailysubscriber extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                                <CardBody>
    
                                    <h4 className="card-title mb-4">Daily Subscription</h4>

                                    <Row className="text-center mt-4">
                                        <Col sm="4">
                                            <h5 className="mb-0 font-size-20">3201</h5>
                                            <p className="text-muted">Activated</p>
                                        </Col>
                                        <Col sm="4">
                                            <h5 className="mb-0 font-size-20">85120</h5>
                                            <p className="text-muted">Pending</p>
                                        </Col>
                                        <Col sm="4">
                                            <h5 className="mb-0 font-size-20">65214</h5>
                                            <p className="text-muted">Deactivated</p>
                                        </Col>
                                    </Row>
    
                                    <div dir="ltr">
                                        <DonutChart />
                                    </div>
    
                                </CardBody>
                            </Card> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Dailysubscriber);