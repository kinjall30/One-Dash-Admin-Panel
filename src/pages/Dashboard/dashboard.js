import React, { Component } from 'react';
// import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
// import { Route, Redirect, Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Import Components
// import MiniCard from "./mini-card";
// import MonthlyEarnings from "./montly-earnings";
// import EmailSent from "./email-sent";
// import MonthlyEarnings2 from "./montly-earnings2";
// import Inbox from "./inbox";
// import RecentActivity from "./recent-activity";
// import WidgetUser from "./widget-user";
// import YearlySales from "./yearly-sales";
// import LatestTransactions from "./latest-transactions";
// import LatestOrders from "./latest-orders";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Dashboard", link : "#" },
                
            ],
            reports : [
                { title : "Roles Management", icon : "mdi-cube-outline", result : "+11%", value : "1,587", desc : "From previous period", color : "info" },
                { title : "Integration Management", icon : "mdi-buffer", result : "-29%", value : "$46,782", desc : "From previous period", color : "danger" },
                { title : "User Management", icon : "mdi-tag-text-outline", result : "0%", value : "$15.9", desc : "From previous period", color : "warning" },
                { title : "Tax Rate Management", icon : "mdi-briefcase-check", result : "+89%", value : "1890", desc : "From previous period", color : "info" },
                { title : "Payment Management", icon : "mdi-briefcase-check", result : "+89%", value : "1890", desc : "From previous period", color : "info" },
                { title : "Notification Management", icon : "mdi-briefcase-check", result : "+89%", value : "1890", desc : "From previous period", color : "info" },
                { title : "Media Management", icon : "mdi-briefcase-check", result : "+89%", value : "1890", desc : "From previous period", color : "info" },
                { title : "Product Management", icon : "mdi-briefcase-check", result : "+89%", value : "1890", desc : "From previous period", color : "info" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Dashboard", this.state.breadcrumbItems);
        console.log(localStorage.getItem("token"))

        // if (!localStorage.getItem("token")) {
        //     return (
        //         window.location.assign("/login")
        //         // <Redirect to={{ pathname: "/login" }} exact />
        //     );
        // }
    }
     

    render() {
        return (
            <React.Fragment>
            {/* 
                    <Link to="">
                        <Row>
                            <MiniCard reports={this.state.reports} />
                        </Row>
                    </Link>

                    <Row>
                        <Col xl="3">
                            
                            <MonthlyEarnings/>
                        </Col>

                        <Col xl="6">
                             Email sent 
                            <EmailSent/>
                        </Col>

                        <Col xl="3">
                            <MonthlyEarnings2/>
                        </Col>

                    </Row>
                */}
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Dashboard);