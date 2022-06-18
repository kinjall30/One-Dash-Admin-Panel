import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    FormGroup,
    Input,
    Form
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EmailCompose from "../Email/email-compose"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import EmailSidebars from "./email-sidebar"

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class EmailMarketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Email", link : "#" },
                { title : "Marketing", link : "#" },
            ],
            
        }
       
    }  
    componentDidMount(){
        this.props.setBreadcrumbItems("Email Marketing", this.state.breadcrumbItems);
      }
    render() {
        

        return (
            <React.Fragment>  
            <Row>
            <Col xs="12">
            <EmailSidebars/>
                <div className="email-rightbar mb-3">

                    <Card>
                        <CardBody>

                            <Form>
                                <FormGroup>
                                    <Input type="email" className="form-control" placeholder="To"/>
                                </FormGroup>

                                <FormGroup>
                                    <Input type="text" className="form-control" placeholder="Subject"/>
                                </FormGroup>
                                <FormGroup>
                                    <div className="summernote">
                                    <Editor
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        editorStyle={{minHeight : "500px"}}
                                    />
                                    </div>
                                </FormGroup>

                                <FormGroup className="btn-toolbar mb-0">
                                    <div className="">
                                        <Button type="button" color="success" className="waves-effect waves-light mr-1"><i className="far fa-save"></i></Button>
                                        <Button type="button" color="success" className="waves-effect waves-light mr-1"><i className="far fa-trash-alt"></i></Button>
                                        <Button color="primary" className="waves-effect waves-light">
                                            <span>Send</span> <i className="fab fa-telegram-plane ml-2"></i>
                                        </Button>
                                    </div>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(EmailMarketing);