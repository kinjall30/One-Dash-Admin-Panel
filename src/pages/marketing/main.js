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

class ExistingCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Existing Campaign", this.state.breadcrumbItems);
    }

  
    render() {
        
        const cardStyle ={
            height: "100px",
            color: "white",
            width: "300px",
            fontSize: "20px",
            textAline: "center",
            backgroundColor: "#7a6fbe"
        }

        return (
            <React.Fragment>
                <Row>
                    <Button  color="info">
                        <Link style={{color: "white"}} to="marketing">New Campaign</Link>
                    </Button>
                </Row>
                
                <Col style={{marginTop: 20}}>
                    <h4>Existing Campaign</h4>
                    <div>
                        
                        <div>
                            <Col>
                                <Card className="mini-stat" style={cardStyle}>
                                    <CardBody className="mini-stat-img">
                                        <div>
                                            <i className="ti-trash float-right"></i>
                                            <i className="ion ion-md-create float-right"></i>
                                        </div>
                                        <h5>Campaign Name</h5>
                                        <h6>Type: SMS</h6>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>

                        <div>
                            <Col>
                                <Card className="mini-stat" style={cardStyle}>
                                    <CardBody className="mini-stat-img">
                                        <div>
                                            <i className="ti-trash float-right"></i>
                                            <i className="ion ion-md-create float-right"></i>
                                        </div>
                                        <h5>Campaign Name</h5>
                                        <h6>Type: Email</h6>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>

                        
                        <div>
                            <Col>
                                <Card className="mini-stat" style={cardStyle}>
                                    <CardBody className="mini-stat-img">
                                        <div>
                                            <i className="ti-trash float-right"></i>
                                            <i className="ion ion-md-create float-right"></i>
                                        </div>
                                        <h5>Campaign Name</h5>
                                        <h6>Type: Whatsapp</h6>
                                    </CardBody>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(ExistingCampaign);