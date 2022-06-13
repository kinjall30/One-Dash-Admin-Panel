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
    Button,
    Table
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class UserProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Projects", link : "#" },
              
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Projects", this.state.breadcrumbItems);
    }

  
    render() {

        return (
            <React.Fragment>
            <h5>Kinjal Prajapati Projects</h5>
            <Row>
            <Col lg="12">
                <Card>
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table table-hover   mb-0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Modified</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr> 
                                        <td>Test1</td>
                                       <td>Project | Social</td>
                                        <td>May 19, 2022</td>
                                    </tr>
                                    <tr> 
                                        <td>Test4</td>
                                       <td>Video</td>
                                        <td>May 9, 2022</td>
                                    </tr>
                                    <tr> 
                                        <td>Test3</td>
                                       <td>Product</td>
                                        <td>May 2, 2022</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UserProject);