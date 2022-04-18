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
        return (
            <React.Fragment>

                    <Row>
                        <Card>
                            <CardBody>

                                <h4 className="card-title">Permission Details</h4>
                                <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>
                            </CardBody>
                        </Card>  

                      
                            
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
                                            name="referal code"
                                            label="Referal Code "
                                            placeholder="Enter Only alphanumeric value"
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
                         
                            {/* <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Permission Details</h4>
                                    <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>

                                    <AvForm>
                                    <AvField
                                        name="firstname"
                                        label="Firstname  "
                                        placeholder="Enter your first name"
                                        type="text"
                                        errorMessage="Enter Name"
                                        validate={{ required: { value: true } }}
                                    />

                                       
                                            <label>Equal To</label>
                                            <AvField
                                                name="password"
                                                type="text"
                                                placeholder="Password"
                                                errorMessage="Enter password"
                                                validate={{ required: { value: true } }}
                                            />
                                            <AvField
                                                name="password1"
                                                type="text"
                                                placeholder="Re-type Password"
                                                errorMessage="Enter Re-password"
                                                validate={{
                                                    required: { value: true },
                                                    match: { value: "password" }
                                                }}
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
                                            <AvField
                                                name="URL"
                                                label="URL  "
                                                placeholder="URL"
                                                type="text"
                                                errorMessage="This value should be a valid url."
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                    value: "https://.*",
                                                    errorMessage: "This value should be a valid url."
                                                    }
                                                }}
                                            />
                                        <AvField
                                            name="digits"
                                            label="Digits  "
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
                                        <AvField
                                            name="number"
                                            label="Number  "
                                            placeholder="Enter Only number"
                                            type="number"
                                            errorMessage="Enter Only Number"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9]+$",
                                                errorMessage: "Only Numbers"
                                                }
                                            }}
                                        />
                                        <AvField
                                            name="alphanumeric"
                                            label="Alphanumeric  "
                                            placeholder="Enter Only alphanumeric value"
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
                                        <FormGroup>
                                            <Label>Textarea</Label>
                                            <div>
                                                <textarea required className="form-control" rows="5"></textarea>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                    Submit
                                                </Button>
                                                <Button type="reset" color="secondary" className="waves-effect">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </FormGroup>
                                    </AvForm>

                                </CardBody>
                            </Card>
                            </Col> */}
                            {/* <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Permission Details</h4>
                                    <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>

                                    <AvForm>
                                    <AvField
                                        name="username"
                                        label="Required  "
                                        placeholder="Type Something"
                                        type="text"
                                        errorMessage="Enter Name"
                                        validate={{ required: { value: true } }}
                                    />

                                       
                                            <label>Equal To</label>
                                            <AvField
                                                name="password"
                                                type="text"
                                                placeholder="Password"
                                                errorMessage="Enter password"
                                                validate={{ required: { value: true } }}
                                            />
                                            <AvField
                                                name="password1"
                                                type="text"
                                                placeholder="Re-type Password"
                                                errorMessage="Enter Re-password"
                                                validate={{
                                                    required: { value: true },
                                                    match: { value: "password" }
                                                }}
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
                                            <AvField
                                                name="URL"
                                                label="URL  "
                                                placeholder="URL"
                                                type="text"
                                                errorMessage="This value should be a valid url."
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                    value: "https://.*",
                                                    errorMessage: "This value should be a valid url."
                                                    }
                                                }}
                                            />
                                        <AvField
                                            name="digits"
                                            label="Digits  "
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
                                        <AvField
                                            name="number"
                                            label="Number  "
                                            placeholder="Enter Only number"
                                            type="number"
                                            errorMessage="Enter Only Number"
                                            validate={{
                                                required: { value: true },
                                                pattern: {
                                                value: "^[0-9]+$",
                                                errorMessage: "Only Numbers"
                                                }
                                            }}
                                        />
                                        <AvField
                                            name="alphanumeric"
                                            label="Alphanumeric  "
                                            placeholder="Enter Only alphanumeric value"
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
                                        <FormGroup>
                                            <Label>Textarea</Label>
                                            <div>
                                                <textarea required className="form-control" rows="5"></textarea>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="mb-0">
                                            <div>
                                                <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                    Submit
                                                </Button>
                                                <Button type="reset" color="secondary" className="waves-effect">
                                                    Cancel
                                                </Button>
                                            </div>
                                        </FormGroup>
                                    </AvForm>

                                </CardBody>
                            </Card>
                            </Col> */}
                            
                        

                        
                    </Row>             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Rolesmanagement);
