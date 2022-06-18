import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
  } from "reactstrap";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../component/Layout/Menus/search-bar";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import DonutChart from "../AllCharts/apex/dountchart";

//Import Images
import imgdark from "../../assets/images/users/user-1.jpg";

class Individualreport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Individual Report", link : "#" },
                { title : "Report", link : "#" },
            ],
        }
        this.printInvoice.bind(this);
    } 


    componentDidMount(){
        this.props.setBreadcrumbItems("Report", this.state.breadcrumbItems);
    }

    printInvoice(){
        window.print();
    }

    render() {
        return (
            <React.Fragment>
                <Col xs="4">
                    <SearchBar/>
                </Col>
                
               <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <Row>
                                        <Col xs="12">
                                            <div className="invoice-title">
                                                <h4 className="float-right font-size-16"><strong>Kinjal Prajapati</strong></h4>
                                                <h3 className="mt-0">
                                                        <img className="d-flex mr-3 rounded-circle avatar-sm" src={imgdark} alt="logo" height="40" border-radius="20"/>
                                                    </h3>
                                            </div>
                                            <hr/>
                                            <Row>
                                                <Col xs="6">
                                                    <address>
                                                            <strong>Customer ID: 721</strong><br/>
                                                            Kinjal <br/>
                                                            Prajapati<br/>
                                                            {/* Apt. 4B<br/>
                                                            Springfield, ST 54321 */}
                                                        </address>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <address>
                                                            <strong>Subscribe: yes</strong><br/>
                                                            Plan: Monthly<br/>
                                                            Plan Details: Unlimited<br/>
                                                            {/* Apt. 4B<br/>
                                                            Springfield, ST 54321 */}
                                                        </address>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="6" className="mt-4">
                                                    <address>
                                                            <strong>Payment Method:</strong><br/>
                                                            Visa ending **** 4242<br/>
                                                            kinjal@email.com
                                                        </address>
                                                </Col>
                                                <Col xs="6" className="mt-4 text-right">
                                                    <address>
                                                            <strong>Start Date:</strong><br/>
                                                            October 7, 2021<br/><br/>
                                                            <strong>End Date:</strong><br/>
                                                            November 7, 2021<br/><br/>
                                                        </address>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <div className="d-print-none">
                                                        <div className="float-right">
                                                            <Link to="#" onClick={this.printInvoice} className="btn btn-success waves-effect waves-light mr-3"><i className="fa fa-print"></i></Link>
                                                            {/* <Link to="#" className="btn btn-primary waves-effect waves-light">Send</Link> */}
                                                        </div>
                                                    </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>  
                         
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Individualreport);