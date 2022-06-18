import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
import MiniCard from "../Dashboard/mini-card";
import MonthlyEarnings from "../Dashboard/montly-earnings";
import EmailSent from "../Dashboard/email-sent";
import MonthlyEarnings2 from "../Dashboard/montly-earnings2";
import Inbox from "../Dashboard/inbox";
import RecentActivity from "../Dashboard/recent-activity";
import WidgetUser from "../Dashboard/widget-user";
import YearlySales from "../Dashboard/yearly-sales";
import LatestTransactions from "../Dashboard/latest-transactions";
import LatestOrders from "../Dashboard/latest-orders";
import Dailysubscriber from './dailysubscriber';
import Monthysale from './monthysale';

class Subscriptionreport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Subscription managemnet", link : "#" },
                { title : "Report", link : "#" },
            ],
            reports : [
                { title : "Total User", icon : "mdi-cube-outline",  value : "1,587" },
                { title : "Total Devices", icon : "mdi-buffer",  value : "5234"},
                { title : "Active Subscription", icon : "mdi-tag-text-outline",  value : "$15.9"},
                { title : "Net Revenue", icon : "mdi-briefcase-check",  value : "$46,782"},
                
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Dashboard", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                   <Row>
                            <MiniCard reports={this.state.reports} />
                        </Row> 

                    <Row>
                        <Col xl="6">
                            
                            <Dailysubscriber/>
                        </Col>

                        <Col xl="6">
                            {/* Email sent */}
                            <Monthysale/>
                        </Col>

                        {/* <Col xl="3">
                            <MonthlyEarnings2/>
                        </Col> */}

                    </Row>
                    

                    {/* <Row>

                        <Col xl="4" lg="6">
                           
                            <Inbox/>
                        </Col>
                        <Col xl="4" lg="6">
                           
                            <RecentActivity/>

                        </Col>
                        <Col xl="4">
                            
                            <WidgetUser/>

                         
                            <YearlySales/>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl="6">
                        
                            <LatestTransactions/>
                        </Col>

                        <Col xl="6">
                            
                            <LatestOrders/>
                        </Col>
                    </Row> */}
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Subscriptionreport);