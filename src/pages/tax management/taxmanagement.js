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
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Tax extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            
        };
    }
    

    componentDidMount() {
        
    }

  
    render() {
        return (
            <React.Fragment>
            <p>Hello</p>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Tax);