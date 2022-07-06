import React, { Component } from 'react';
import {
    Col,
    Card,
    CardBody,
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import { MDBDataTable } from 'mdbreact';

// import DountChart from "../AllCharts/chartjs/dountchart";
// import LineChart from "../AllCharts/chartjs/linechart";

// import img from "../../assets/images/img1.jpg"
// import Subscriptionreport from "./report"

class UserSubscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "User", link : "#" },
                { title : "Subscription", link : "#" },
            ],
          
        }
        
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("User Subscription", this.state.breadcrumbItems);
    }

   
    render() {
        const cardStyle ={
            height: "200px",
            color: "white",
            width: "600px",
            fontSize: "20px",
            textAline: "center",
            backgroundColor: "#7a6fbe",
            padding: "20px"
        }

        // const mainStyle = {
        //     display: "flex",
        //     justifyContent: "space-around",
        // }
        return (
            <React.Fragment>
            <div style={{marginBottom: 20}}>
            <h4>Kinjal Parajapati's Subscription</h4>
        </div>
        <Col>
            <Col >
                <Card className="mini-stat" style={cardStyle}>
                    <h5>Plan Details</h5>
                    <CardBody className="mini-stat-img">
                        <div >
                            <h3>Shoppable Plan</h3>
                            <p>Your plan will be automatically renewed on June 28, 2022. It will charge as one payment of $29.99</p>  
                        </div>
                    </CardBody>
                </Card> 
            </Col>
       </Col> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UserSubscription);