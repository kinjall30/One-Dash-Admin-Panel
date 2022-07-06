import React, { Component } from 'react';
import {
 
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class CustomerServiceReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Customer Service", link : "#" },
                { title : "Report", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Customer Service Report", this.state.breadcrumbItems);
    }

  
    render() {
        

        return (
            <React.Fragment>
                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CustomerServiceReport);