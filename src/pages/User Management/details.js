import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardText,
    CardBody,
    TabContent,
    TabPane,
    Collapse,
    NavLink,
    NavItem,
    Nav,
    Button,
    Table,
     Input,
    FormGroup,
    Label,
    Alert,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Modal
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import { MDBDataTable } from 'mdbreact';



class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "User Details", link : "#" },
            ],
            modal_shopify: false,
            modal_bigcommerce: false,
            modal_stripe: false,
            modal_woocommerce: false,
            sub: '',
            username: '',
            given_name: '',
            family_name: '',
            email: '',
            email_verified: '',
            status: '',
            created_at: '',
            upated_at: '' ,
            temp: false, 
            integration: '',
            stripe:[],
            shopify:[],  
            bigcommerce:[],
            woocommerce:[],
            subscription: [],
            payload: [],
            otherSub: [],
            shopify_credential: [],
            strip_credential:[],
            bigcommerce_credential: [],
            woocommerce_credential: [],
            projects: []

        }
        this.tog_shopify = this.tog_shopify.bind(this);
        this.tog_stripe = this.tog_stripe.bind(this);
        this.tog_bigcommerce = this.tog_bigcommerce.bind(this);
        this.tog_woocommerce = this.tog_woocommerce.bind(this);
       this.changeHandler = this.changeHandler.bind(this);
       this.updateUser = this.updateUser.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.getAllIntegrations = this.getAllIntegrations.bind(this);
        this.getSubscriptionDetails = this.getSubscriptionDetails.bind(this);
        this.getAllProjects = this.getAllProjects.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Users Details", this.state.breadcrumbItems);
      const {user} = this.props.location.state
      this.setState({
        sub: user.sub,
        username: user.Username,
        given_name: user.given_name,
        family_name: user.family_name,
        email: user.email,
        email_verified: user.email_verified,
        status: user.UserStatus,
        created_at: user.UserCreateDate,
        upated_at: user.UserLastModifiedDate
      })
    //   console.log("hello")

      this.getAllIntegrations()
      this.getSubscriptionDetails()
      this.getAllProjects()
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    
    updateUser() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": this.state.username,
        "givenName": this.state.given_name,
        "familyName": this.state.family_name,
        "email": this.state.email
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (result.statusCode == "200") {
               
                this.setState({
                    temp: true
                })
                setTimeout(() => {
                    this.setState({
                    temp: false
                })
                    }, 3000);
            } else {
                alert(result)
            }
        })
        .catch(error => console.log('error', error));
    }

    getAllIntegrations(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " +localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "sub": "79725476-a6a3-4467-be84-a211968a3b7d"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers/integrations", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log((result.body[0]._source.integration.stripe).length)
            var stripeCredential = (result.body[0]._source.integration.stripe).length == 0 ? []: result.body[0]._source.integration.stripe[0].credentials
            var shopifyCredential = (result.body[0]._source.integration.shopify).length == 0 ? []: result.body[0]._source.integration.shopify[0].credentials
            var woocommerceCredential= (result.body[0]._source.integration.woocommerce).length == 0 ? []: result.body[0]._source.integration.woocommerce[0].credentials
            var bigcommerceCredential = (result.body[0]._source.integration.bigcommerce).length == 0 ? []: result.body[0]._source.integration.bigcommerce[0].credentials
            
            this.setState({
                stripe:result.body[0]._source.integration.stripe[0],
                shopify:result.body[0]._source.integration.shopify[0],
                bigcommerce:result.body[0]._source.integration.bigcommerce[0],
                woocommerce:result.body[0]._source.integration.woocommerce[0],
                shopify_credential: shopifyCredential,
                stripe_credential: stripeCredential,
                bigcommerce_credential: bigcommerceCredential,
                woocommerce_credential: woocommerceCredential
            })

        })
        .catch(error => console.log('error', error));
    }

    getSubscriptionDetails() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"sub": "79725476-a6a3-4467-be84-a211968a3b7d"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers/subscription", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log("subscription",result)
            this.setState({
                subscription: result.body[0]._source.plan,
                payload: result.body[0]._source.payload,
                otherSub: result.body[0]._source
            })
            console.log("subs",this.state.subscription)
        })
        .catch(error => console.log('error', error));

    }

    getAllProjects(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "sub": "79725476-a6a3-4467-be84-a211968a3b7d"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers/projects", requestOptions)
        .then(response => response.json())
        .then(data => {
             var array = []
                for(let i=0; i< data.body.length; i++){
                    array.push({
                        name: data.body[i]._source.name,
                        projectType: data.body[i]._source.projectType,
                        status: data.body[i]._source.status,
                        type: data.body[i]._source.type,
                        size: data.body[i]._source.size,
                        createdAt: data.body[i]._source.metadata.createdAt,
                        updatedAt: data.body[i]._source.metadata.updatedAt,
                        button: 
                            <div>
                            <Link to ={{
                                pathname: "/userdetails", 
                                state: { 
                                    user: data.body[i]    
                                }
                            }}>
                                <Button type="button"
                                    // onClick={
                                    //     () => this.fillUser(data.body[i])
                                    // }
                                    style={
                                        {marginRight: 10}
                                    }
                                    color="primary"
                                    className="waves-effect waves-light">
                                    <i className="ti-eye"></i>
                                </Button>
                                </Link>
                            </div>
                        
                    })
                }
                  this.setState({projects: array})
                  console.log(data)
              })
              
        .catch(error => console.log('error', error));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
          this.setState({
            activeTab1: tab
          });
        }
    }

    tog_shopify() {
        this.setState(prevState => ({
            modal_shopify: !prevState.modal_shopify
        }));
    }

    tog_stripe() {
        this.setState(prevState => ({
            modal_stripe: !prevState.modal_stripe
        }));
    }

    tog_woocommerce() {
        this.setState(prevState => ({
            modal_woocommerce: !prevState.modal_woocommerce
        }));
    }

    tog_bigcommerce() {
        this.setState(prevState => ({
            modal_bigcommerce: !prevState.modal_bigcommerce
        }));
    }
    
    render() {
         const {integration,shopify,stripe,bigcommerce,woocommerce} = this.state;
       // console.log(payment_details)
       const cardStyle ={
        height: "100px",
        color: "white",
        width: "300px",
        fontSize: "20px",
        textAline: "center",
        backgroundColor: "#7a6fbe"
        }  
         const data = {
            columns: [
                {
                    label: 'Project Name',
                    field: 'name',
                    sort: 'asc',
                    width: 150
                },
                 {
                    label: 'Project Type',
                    field: 'projectType',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Type',
                    field: 'type',
                    sort: 'asc',
                    width: 200
                },
                 {
                    label: 'Size',
                    field: 'size',
                    sort: 'asc',
                    width: 100
                },
                 {
                    label: 'Created At',
                    field: 'createdAt',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Modified At',
                    field: 'updatedAt',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Action',
                    field: 'button',
                    sort: 'asc',
                    width: 100
                }
            ],
            rows: this.state.projects
        }; 

    console.log("typeof",typeof this.state.shopify == 'object') 
        return (
            <React.Fragment>
                {this.state.temp ? <Alert color="success">
                    <strong>User updated successfully</strong> 
                    </Alert>: null}
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody className="text-center">
                                <h5>Name: {this.state.given_name}</h5> 
                                <p>User ID: {this.state.sub}</p>     
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody className="text-center">
                                <Row>
                                    <Col className="ml-4">
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Sub</Label>
                                            <Input className="form-control" disabled type="text" name="sub" value={this.state.sub} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Family Name</Label>
                                            <Input className="form-control" type="text" name="family_name" value={this.state.family_name} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="example-password-input" className=" col-form-label">Status</Label>                                       
                                                <select className="form-control" disabled name='status'
                                                    value={
                                                        this.state.status
                                                    }
                                                    onChange={
                                                        this.changeHandler
                                                }>
                                                    <option>Select</option>
                                                    <option value="CONFIRMED">CONFIRMED</option>
                                                    <option value="UNCONFIRMED">UNCONFIRMED</option>
                                                    
                                                </select>
                                        </FormGroup>
                                    </Col> 
                                    <Col className="ml-4">  
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Username</Label>
                                            <Input className="form-control" disabled type="text" name="username" value={this.state.username} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Email</Label>
                                            <Input className="form-control" type="email" name="email" value={this.state.email} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Created At</Label>
                                            <Input className="form-control" disabled type="text" name="created_at" value={this.state.created_at} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        <Button type="button" color="primary" style={{width: "300px"}}
                                            onClick={
                                                () => this.updateUser()
                                            }
                                            className="waves-effect waves-light ">
                                            Update
                                        </Button>
                                    </Col>
                                    
                                    <Col className="ml-4">
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Given Name</Label>
                                            <Input className="form-control" type="text" name="given_name" value={this.state.given_name} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Email Verified</Label>
                                            <select className="form-control" disabled name='emai_verified'
                                                    value={
                                                        this.state.email_verified
                                                    }
                                                    onChange={
                                                        this.changeHandler
                                                }>
                                                    <option>Select</option>
                                                    <option value="true">true</option>
                                                    <option value="false">false</option>
                                                    
                                                </select>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="example-text-input" className="col-form-label">Updated At</Label>
                                            <Input className="form-control" disabled type="text" name="upated_at" value={this.state.upated_at} onChange={this.changeHandler} id="example-text-input"/>
                                        </FormGroup>
                                        
                                    </Col>  
                                </Row>
                            </CardBody> 
                        </Card>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody> 
                                <Nav pills justified>
                                    <NavItem className="waves-effect waves-light">
                                    <NavLink
                                        style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.activeTab1 === "5"
                                            })}
                                            onClick={() => {
                                            this.toggle1("5");
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                            <span className="d-none d-sm-block">Projects</span>
                                    </NavLink>
                                    </NavItem>
                                    <NavItem className="waves-effect waves-light">
                                    <NavLink
                                        style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.activeTab1 === "6"
                                            })}
                                            onClick={() => {
                                            this.toggle1("6");
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                            <span className="d-none d-sm-block">Integrations</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="waves-effect waves-light">
                                    <NavLink
                                        style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.activeTab1 === "7"
                                            })}
                                            onClick={() => {
                                            this.toggle1("7");
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                            <span className="d-none d-sm-block">Subscription</span>
                                        </NavLink>
                                    </NavItem>
                                    
                                </Nav>

                            
                                <TabContent activeTab={this.state.activeTab1}>
                                    <TabPane tabId="5" className="p-3">
                                        <Row>
                                            <Col xs="12">
                                                <Card>
                                                    <CardBody>
                                                        <MDBDataTable
                                                            responsive
                                                            bordered
                                                            striped
                                                            data={data}    
                                                        />
                           
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="6" className="p-3">
                                        <Row>
                                            <div>
                                            { typeof this.state.shopify == 'object' ? <Col>
                                                    <Card  className="mini-stat" style={cardStyle}>
                                                        <CardBody className="mini-stat-img">
                                                            <Button color="secondary" className="float-right" onClick = {()=> this.tog_shopify()}><i className="ti-eye float-right"></i></Button>
                                                            <h5>Shopify</h5>
                                                            <p style={{fontSize: 10}}>{this.state.shopify.url}</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col> : null
                                            }
                                                
                                            </div>
                                            <div>
                                            { typeof this.state.stripe == 'object' ? <Col>
                                                    <Card  className="mini-stat" style={cardStyle}>
                                                        <CardBody className="mini-stat-img">
                                                            <Button className="float-right" onClick = {()=> this.tog_stripe()}><i className="ti-eye float-right"></i></Button>
                                                            <h5>Stripe</h5>
                                                            <p style={{fontSize: 10}}>{this.state.stripe.url}</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col> : null
                                            }
                                                
                                            </div>
                                            <div>
                                            { typeof this.state.woocommerce == 'object' ? <Col>
                                                    <Card  className="mini-stat" style={cardStyle}>
                                                        <CardBody className="mini-stat-img">
                                                            <Button className="float-right" onClick = {()=> this.tog_woocommerce()}><i className="ti-eye float-right"></i></Button>
                                                            <h5>WooCommerce</h5>
                                                            <p style={{fontSize: 10}}>{this.state.woocommerce.url}</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col> : null
                                            }
                                                
                                            </div>
                                            <div>
                                            
                                            { typeof this.state.bigcommerce == 'object' ? <Col>
                                                    <Card  className="mini-stat" style={cardStyle}>
                                                        <CardBody className="mini-stat-img">
                                                            <Button className="float-right" onClick = {()=> this.tog_bigcommerce()}><i className="ti-eye float-right"></i></Button>
                                                            <h5>BigCommerce</h5>
                                                            <p style={{fontSize: 10}}>{this.state.bigcommerce.url}</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col> : null
                                            }
                                                
                                            </div>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="7" className="p-3">
                                        <Row>
                                            <Col lg="6">
                                                <Card color="light">
                                                    <h4 className="card-header font-16 mt-0">{this.state.subscription.name} Plan</h4>
                                                    <CardBody>
                                                        
                                                        <CardText> Your plan will be automatically renewed on { new Date(this.state.otherSub.nextBillingTime * 1000).toLocaleDateString("en-US") }. It will be charged as one payment of ${this.state.subscription.price}.</CardText>
                                                        <Link to="#" className="btn btn-danger">Cancel Plan</Link>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>

                                </CardBody>
                        </Card>
                    </Col>
                </Row>

                {/* Shopify */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_shopify
                        }
                        toggle={
                            this.tog_shopify
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_shopify
                        }>
                            Integration Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="name" disabled
                                        value={
                                           typeof this.state.shopify == 'object' ? this.state.shopify.name : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Shop Url</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="first_name" disabled
                                        value={
                                            typeof this.state.shopify == 'object' ? this.state.shopify.url : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Api Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="last_name" disabled
                                        value={
                                            typeof this.state.shopify_credential == 'object' ? this.state.shopify_credential.apiKey : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Store Access Token</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.shopify_credential == 'object' ? this.state.shopify_credential.storefrontAccessToken : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Api Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.shopify_credential == 'object' ? this.state.shopify_credential.apiPassword : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Shared Secret</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.shopify_credential == 'object' ? this.state.shopify_credential.sharedSecret : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button type="button" color="secondary" className="waves-effect"
                            onClick={
                                this.tog_shopify
                            }>Close
                        </Button>
                            
                        </ModalFooter>
                    </Modal>
                </Row>

                {/* Stripe */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_stripe
                        }
                        toggle={
                            this.tog_stripe
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_stripe
                        }>
                            Integration Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="name" disabled
                                        value={
                                           typeof this.state.stripe == 'object' ? this.state.stripe.name : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Shop Url</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="first_name" disabled
                                        value={
                                            typeof this.state.stripe == 'object' ? this.state.stripe.url : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Api Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="last_name" disabled
                                        value={
                                            typeof this.state.stripe == 'object' ? this.state.strip_credential.apiKey : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Store Access Token</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.shopify_credential == 'object' ? this.state.strip_credential.storefrontAccessToken : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Api Password</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.strip_credential == 'object' ? this.state.strip_credential.apiPassword : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Shared Secret</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.strip_credential == 'object' ? this.state.strip_credential.sharedSecret : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button type="button" color="secondary" className="waves-effect"
                            onClick={
                                this.tog_stripe
                            }>Close
                        </Button>
                            
                        </ModalFooter>
                    </Modal>
                </Row>

                {/* WooCommerce */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_woocommerce
                        }
                        toggle={
                            this.tog_woocommerce
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_woocommerce
                        }>
                            Integration Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="name" disabled
                                        value={
                                           typeof this.state.woocommerce == 'object' ? this.state.woocommerce.name : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Shop Url</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="first_name" disabled
                                        value={
                                           typeof this.state.woocommerce == 'object' ? this.state.woocommerce.url : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Consumer Secret</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="last_name" disabled
                                        value={
                                            typeof this.state.woocommerce_credential == 'object' ? this.state.woocommerce_credential.consumerSecret : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Consumer Key</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                           typeof this.state.woocommerce_credential == 'object' ? this.state.woocommerce_credential.consumerKey : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                           
                        </ModalBody>
                        <ModalFooter>
                        <Button type="button" color="secondary" className="waves-effect"
                            onClick={
                                this.tog_woocommerce
                            }>Close
                        </Button>
                            
                        </ModalFooter>
                    </Modal>
                </Row>

                {/* BigCommerce */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_bigcommerce
                        }
                        toggle={
                            this.tog_bigcommerce
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_bigcommerce
                        }>
                            Integration Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="name" disabled
                                        value={
                                           typeof this.state.bigcommerce == 'object' ? this.state.bigcommerce.name : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Shop Url</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="first_name" disabled
                                        value={
                                            typeof this.state.bigcommerce == 'object' ? this.state.bigcommerce.url : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Client ID</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="last_name" disabled
                                        value={
                                            typeof this.state.bigcommerce_credential == 'object' ? this.state.bigcommerce_credential.apiKey : null
                                        }
                                        type="text"
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Client Secret</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.bigcommerce_credential == 'object' ? this.state.bigcommerce_credential.storefrontAccessToken : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Api Path</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.bigcommerce_credential == 'object' ? this.state.bigcommerce_credential.apiPassword : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-tel-input" className="col-sm-2 col-form-label">Access Token</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="email" type="text" disabled
                                        value={
                                            typeof this.state.bigcommerce_credential == 'object' ? this.state.bigcommerce_credential.sharedSecret : null
                                        }
                                        onChange={
                                            this.changeHandler
                                        }
                                        id="example-search-input"/>
                                </Col>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button type="button" color="secondary" className="waves-effect"
                            onClick={
                                this.tog_bigcommerce
                            }>Close
                        </Button>
                            
                        </ModalFooter>
                    </Modal>
                </Row>
             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UserDetails);
