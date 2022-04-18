import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MDBDataTable } from 'mdbreact';

//Import datatable css


//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";

class Businessuser extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         breadcrumbItems : [
    //             { title : "One Dash", link : "#" },
    //             { title : "User Management", link : "#" },
    //             { title : "Details", link : "#" },
    //         ],
    //     }
    // }

    componentDidMount(){
        // this.props.setBreadcrumbItems("User Management", this.state.breadcrumbItems);
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'Username',
                    field: 'username',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Firstname',
                    field: 'firstname',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Lastname',
                    field: 'lastname',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Password',
                    field: 'password',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Plan',
                    field: 'plan',
                    sort: 'asc',
                    width: 100
                }
            ],rows: [
                {
                    username: 'TigerNixon',
                    firstname: 'Tiger',
                    lastname: 'Nixon',
                    email: 'tiger@gmail.com',
                    password: 'tiger123',
                    plan: 'monthly'
                },
                {
                    username: 'ParthG',
                    firstname: 'Path',
                    lastname: 'Goel',
                    email: 'parthg@gmail.com',
                    password: 'goel123',
                    plan: 'monthly'
                },
                {
                    username: 'Atulk',
                    firstname: 'Atul',
                    lastname: 'Shah',
                    email: 'shah@gmail.com',
                    password: 'shah123',
                    plan: 'unlimited'
                },
                {
                    username: 'mitull',
                    firstname: 'Mitul',
                    lastname: 'Patel',
                    email: 'mitul@gmail.com',
                    password: 'mitul123',
                    plan: 'monthly'
                },
                {
                    username: 'Atikk',
                    firstname: 'Atik',
                    lastname: 'Khan',
                    email: 'atik@gmail.com',
                    password: 'atik123',
                    plan: 'monthly'
                },,
                {
                    username: 'Kinjall',
                    firstname: 'Kinjal',
                    lastname: 'Prajapati',
                    email: 'kinjal@gmail.com',
                    password: 'kinjal123',
                    plan: 'unlimited'
                },
            ]
        };
        return (
            <React.Fragment>
                    <h1>Businessuser Details</h1>
                    <Button type="button" color="info" className="waves-effect waves-light">Add User</Button>
                    <Row>
                        <Col lg = "10">
                           
                                <MDBDataTable
                                responsive
                                bordered
                                data={data}
                                />
                            

                        </Col>
                      
                            
                    </Row>             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Businessuser);
