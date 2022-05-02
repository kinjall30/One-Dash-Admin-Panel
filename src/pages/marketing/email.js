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
// import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class EmailMarketing extends Component {
    constructor(props) {
        super(props);
       
    }  
  
    render() {
        

        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <p>hello email marketing</p>
                    </CardBody>
                </Card>    
            </React.Fragment>
        );
    }
}

export default EmailMarketing;