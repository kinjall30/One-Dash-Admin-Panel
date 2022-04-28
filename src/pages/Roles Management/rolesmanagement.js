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

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { MDBDataTable } from 'mdbreact';

class Rolesmanagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Roles Management", link : "#" },
                { title : "Form", link : "#" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Roles Management", this.state.breadcrumbItems);
    }

    render() {
        const data = {
            columns: [
                {
                    label: 'Firstname',
                    field: 'firstname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Middlename',
                    field: 'middlename',
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
                    label: 'Phone Number',
                    field: 'phn',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: '',
                    field: 'buttons',
                    sort: 'but',
                    width: 250
                },
            ],rows: [
                {
                    firstname: 'kinjal',
                    middlename: 'N.',
                    lastname: 'prajapati',
                    phn: '4152639874',
                    email: 'prajapati@gmail.com',
                    role: 'admin',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    firstname: 'Parth',
                    middlename: 'N.',
                    lastname: 'Trivedi',
                    phn: '4152639874',
                    email: 'parth@gmail.com',
                    role: 'admin',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    firstname: 'Abc',
                    middlename: 'N.',
                    lastname: 'pqr',
                    phn: '4152639874',
                    email: 'abc@gmail.com',
                    role: 'user',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    firstname: 'Atul',
                    middlename: 'N.',
                    lastname: 'Shah',
                    phn: '4152639874',
                    email: 'atul@gmail.com',
                    role: 'admin',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    firstname: 'Mital',
                    middlename: 'N.',
                    lastname: 'Patanavadi',
                    phn: '4152639874',
                    email: 'mital@gmail.com',
                    role: 'user',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                {
                    firstname: 'Atik',
                    middlename: '',
                    lastname: 'Khan',
                    phn: '4152639874',
                    email: 'atik@gmail.com',
                    role: 'super admin',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    ],
                   
                },
                ,
            ]
        };
        return (
            <React.Fragment>
<h4 className="card-title">Permission Details</h4>
                    <Row>
                        {/* <Card>
                            <CardBody>

                                
                                <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>
                            </CardBody>
                        </Card>   */}

                      
                            
                                <Col lg="4">
                                    <AvForm>
                                        <AvField
                                            name="firstname"
                                            label="Firstname  "
                                            placeholder="Enter your firstname"
                                            type="text"
                                            errorMessage="Enter Name"
                                            validate={{ required: { value: true } }}
                                        />

                                        <AvField
                                            name="digits"
                                            label="Phone No. "
                                            placeholder="Enter Only Digits"
                                            type="number"
                                            errorMessage="Enter Only Digits"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9]+$",
                                                errorMessage: "Only Digits"
                                                }
                                            }}
                                        />              
                                    </AvForm>
                                    
                                </Col> 

                                <Col lg="4">
                                    <AvForm>
                                        <AvField
                                            name="middlename"
                                            label="Middlename  "
                                            placeholder="Enter your middlename"
                                            type="text"
                                            errorMessage="Enter Name"
                                            validate={{ required: { value: true } }}
                                        />

                                        <AvField
                                            name="email"
                                            label="E-Mail  "
                                            placeholder="Enter Valid Email"
                                            type="email"
                                            errorMessage="Invalid Email"
                                            validate={{
                                                required: { value: true },
                                                email: { value: true }
                                            }}
                                        />
                                    </AvForm>

                                    
                                </Col>
                                <Col lg="4">
                                <AvForm>
                                        <AvField
                                            name="lastname"
                                            label="Lastname  "
                                            placeholder="Enter your lastname"
                                            type="text"
                                            errorMessage="Enter Name"
                                            validate={{ required: { value: true } }}
                                        />

                                        <AvField
                                            name="Role"
                                            label="Role "
                                            placeholder="Enter role to be assigned"
                                            type="text"
                                            errorMessage="Enter Only Alphanumeric"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9a-zA-Z]+$",
                                                errorMessage: "Only Alphanumeric"
                                                }
                                            }}
                                        />
                                    </AvForm>
                                </Col>

                                <FormGroup className="mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="waves-effect waves-light mr-1" style={{}}>
                                                    Submit
                                                </Button>
                                            </div>
                                </FormGroup>
                   
                    </Row>

                    <Row lg="12" style={{ marginTop: 50}}>
                        <h4>Roles</h4>
                       
                        <Col lg = "12">
                        <Button type="button"  onClick={this.tog_large} color="info" className="waves-effect waves-light">Add Roles</Button>
                                <MDBDataTable
                                responsive
                                btn
                                hover
                                bordered
                                data={data}
                                />
                        </Col>
      
                    </Row>           
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Rolesmanagement);
