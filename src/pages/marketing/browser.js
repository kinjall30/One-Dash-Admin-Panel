import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class WebsiteMarketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Browser", link : "#" },
                { title : "Marketing", link : "#" },
            ],
            
        }
       
    }  
    componentDidMount(){
        this.props.setBreadcrumbItems("Browser Marketing", this.state.breadcrumbItems);
      }
  
    render() {
        

        return (
            <React.Fragment>
                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(WebsiteMarketing);