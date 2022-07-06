import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
// import BootstrapTable from "react-bootstrap-table-next";
import { MDBDataTable } from 'mdbreact';

// import DountChart from "../AllCharts/chartjs/dountchart";
import LineChart from "../AllCharts/chartjs/linechart";

// import img from "../../assets/images/img1.jpg"


class ProductReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Product", link : "#" },
                { title : "Report", link : "#" },
            ],
            modal_standard: false,
            modal_large: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
        this.tog_large = this.tog_large.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Product Report", this.state.breadcrumbItems);
    }

    
    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }
    
       
    tog_large() {
        this.setState(prevState => ({
          modal_large: !prevState.modal_large
        }));
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
                    label: 'Project Name',
                    field: 'project',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Shop',
                    field: 'shop',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Projects',
                    field: 'noproject',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Revenue',
                    field: 'revenue',
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
                    username: 'TigerNixon',
                    project: 'The Feeling Flick - Panther',
                    price: '$22.00',
                    shop: 'Shopify',
                    noproject: '1',
                    revenue: '$0.00',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" style = {{marginRight: 10}} className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    <Button type="button"onClick={this.tog_standard}  color="secondary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-eye"></i></Button>],
                   
                },
                {
                    username: 'AtikK',
                    project: 'Riana Dress ',
                    price: '$27.00',
                    shop: 'Shopify',
                    noproject: '1',
                    revenue: '$0.00',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" style = {{marginRight: 10}} className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    <Button type="button"onClick={this.tog_standard}  color="secondary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-eye"></i></Button> ],
                   
                },
                {
                    username: 'MitalP',
                    project: 'The thousand splendid sun',
                    price: '$12.00',
                    shop: 'Amazon',
                    noproject: '1',
                    revenue: '$0.00',
                    buttons: [ <Button type="button"  onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" style = {{marginRight: 10}} className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    <Button type="button"onClick={this.tog_standard}  color="secondary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-eye"></i></Button> ],
                   
                },
                {
                    username: 'Masud',
                    project: 'Amos. Coffee Table',
                    price: '$22.00',
                    shop: 'Shopify',
                    noproject: '1',
                    revenue: '$0.00',
                    buttons: [ <Button type="button"  onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" style = {{marginRight: 10}} className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    <Button type="button"onClick={this.tog_standard}  color="secondary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-eye"></i></Button> ],
                   
                },
                {
                    username: 'Parth',
                    project: 'The Dior Purfume',
                    price: '$22.00',
                    shop: 'BigCommerce',
                    noproject: '2',
                    revenue: '$20.00',
                    buttons: [ <Button type="button"  onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" style = {{marginRight: 10}} className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    <Button type="button"onClick={this.tog_standard}  color="secondary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-eye"></i></Button> ],
                   
                },
                {
                    username: 'KinjalP',
                    project: 'The Classic Potr',
                    price: '$72.00',
                    shop: 'BigCommerce',
                    noproject: '1',
                    revenue: '$0.00',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}}  color="primary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-pencil"></i></Button>, 
                    <Button type="button" color="danger" style = {{marginRight: 10}} className="waves-effect waves-light"><i className="ti-trash"></i></Button>,
                    <Button type="button"onClick={this.tog_standard}  color="secondary" className="waves-effect waves-light" data-toggle="modal" data-target="#myModal"><i className="ti-eye"></i></Button> ],
                   
                },
            ]
        };
        

        return (
            <React.Fragment>

                    <h1>Product Details</h1>
                    <Button type="button" color="info" className="waves-effect waves-light">Add Product</Button>
                    <Row lg = "12">
                        <Col lg = "12">
                                <MDBDataTable
                                responsive
                                btn
                                hover
                                bordered
                                data={data}
                                />
                        </Col>
      
                    </Row> 

                    <Row>
                        <Col sm="6" md="3" className="mt-4" >
                            <Modal
                                isOpen={this.state.modal_standard}
                                toggle={this.tog_standard}
                                autoFocus={true}
                                size = "lg"
                            > 
                                                
                                <ModalHeader toggle={this.tog_standard}>
                                    Product Summary
                                </ModalHeader >
                                <ModalBody>
                                    <h5>The Feeling Flick - Panther</h5>
                                    <Row>
                                        <Col>
                                            Shopify |
                                        </Col> 
                                    </Row>
                                    <Row>
                                        <Col> https://vexpro.myshopify.com</Col>
                                    </Row>
                                    <Row> <Col> $60.00</Col></Row>
                                    <Row><hr/></Row>
                                    <Row>
                                        <Col>6</Col>
                                        <Col>5</Col>
                                        <Col>50</Col>
                                        <Col>10</Col>
                                        <Col>$40.25</Col>
                                    </Row>
                                    <Row>
                                        <Col>View</Col>
                                        <Col>Add To Bag</Col>
                                        <Col>Views</Col>
                                        <Col>Purchase</Col>
                                        <Col>Revenue</Col>
                                    </Row>
                                    <Row>
                                        <Col lg="10" style={{marginTop: 50}}>
                                            <Card>
                                                <CardBody>
                                                    <h4 className="card-title mb-4">Sales</h4>
                                                    <LineChart />

                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                    {/* <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button> */}
                                </ModalFooter>                                              
                            </Modal>  
                        </Col>
                    </Row>
                        
                    <Row>
                        
                        <Modal
                            isOpen={this.state.modal_large}
                            toggle={this.tog_large}
                            autoFocus={true}
                            size = "lg"
                        >
                            <ModalHeader toggle={this.tog_large}>
                                Edit Details
                            </ModalHeader>
                            <ModalBody>
                                    <FormGroup row>
                                        <Label for="example-text-input" className="col-sm-2 col-form-label">Project Name</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text" id="example-text-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-search-input" className="col-sm-2 col-form-label">Price</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="number"  id="example-search-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-email-input" className="col-sm-2 col-form-label">Shop</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="text"  id="example-email-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-url-input" className="col-sm-2 col-form-label">Number Of Projects</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="number" id="example-url-input"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="example-tel-input" className="col-sm-2 col-form-label">Revenue</Label>
                                        <Col sm="10">
                                            <Input className="form-control" type="number" id="example-tel-input"/>
                                        </Col>
                                    </FormGroup>
                                                            
                            </ModalBody>
                            <ModalFooter>
                                    <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                    <Button type="button" color="primary" className="waves-effect waves-light">Save changes</Button>
                                </ModalFooter>                      
                        </Modal>
                    </Row>
                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(ProductReport);