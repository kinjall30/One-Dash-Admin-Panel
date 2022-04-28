import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    TabContent,
    TabPane,

    NavLink,
    NavItem,
    Nav,

  } from "reactstrap";
  import classnames from "classnames";
import { connect } from "react-redux";




import Enduser from "./enduser"
import Businessuser from "./businessuser"


//Import datatable css


//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class Usermanagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "User Management", link : "#" },
                { title : "Details", link : "#" },
            ],
            // enduser:false,
            // businessuser:false,
            activeTab: "1",
            activeTab1: "5",
            activeTab2: "9",
            activeTab3: "13",
            customActiveTab: "1",
            activeTabJustify: "5",
            col1: true,
            col2: false,
            col3: false,
            col5: true
        }

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

        this.t_col1 = this.t_col1.bind(this);
        this.t_col2 = this.t_col2.bind(this);
        this.t_col3 = this.t_col3.bind(this);
        this.t_col5 = this.t_col5.bind(this);

        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);

        this.toggleCustomJustified = this.toggleCustomJustified.bind(this);
        this.toggleCustom = this.toggleCustom.bind(this);
        // this.hideComponent = this.hideComponent.bind(this);
    }

    handleEnduser = () => {
        this.setState({
            enduser: true
        })
    }

    handleBusinessuser = () => {
        this.setState({
            businessuser: true
        })
    }
    componentDidMount(){
        this.props.setBreadcrumbItems("User Management", this.state.breadcrumbItems);
    }
    t_col1() {
        this.setState({ col1: !this.state.col1, col2:false, col3:false });
      }
      t_col2() {
        this.setState({ col2: !this.state.col2, col1:false, col3:false });
      }
      t_col3() {
        this.setState({ col3: !this.state.col3, col1:false, col2:false });
      }
      t_col5() {
        this.setState({ col5: !this.state.col5 });
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
          this.setState({
            activeTab1: tab
          });
        }
      }
      toggle2(tab) {
        if (this.state.activeTab2 !== tab) {
          this.setState({
            activeTab2: tab
          });
        }
      }
      toggle3(tab) {
        if (this.state.activeTab3 !== tab) {
          this.setState({
            activeTab3: tab
          });
        }
      }
    
      toggleCustomJustified(tab) {
        if (this.state.activeTabJustify !== tab) {
          this.setState({
            activeTabJustify: tab
          });
        }
      }
    
      toggleCustom(tab) {
        if (this.state.customActiveTab !== tab) {
          this.setState({
            customActiveTab: tab
          });
        }
      }

    render() {
        const { user, enduser } = this.state;
        
        return (
            <React.Fragment>
                {/* <Card>
                    <CardBody>
                        <h4 className="card-title">User Details</h4>
                        <p className="card-title-desc">Parsley is a javascript form validation library. It helps you provide your users with feedback on their form submission before sending it to your server.</p>
                    </CardBody>
                </Card>  */}
                <Row lg = "12"> 
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                        style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.activeTab === "1"
                                            })}
                                            onClick={() => {
                                            this.toggle("1");
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                            <span className="d-none d-sm-block">Enduser</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                        style={{ cursor : "pointer" }}
                                            className={classnames({
                                            active: this.state.activeTab === "2"
                                            })}
                                            onClick={() => {
                                            this.toggle("2");
                                            }}
                                        >
                                            <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block">Businessuser</span>
                                        </NavLink>
                                    </NavItem>   
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1" className="p-3">
                                        <Enduser/>
                                    </TabPane>
                                    <TabPane tabId="2" className="p-3">
                                        <Businessuser/>
                                    </TabPane>   
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Usermanagement);


  {/* <Col lg= "2">
                            <Button type="button" onClick={this.handleEnduser} color="primary" className="waves-effect waves-light">Enduser</Button><p></p>
                            <Button type="button" onClick={this.handleBusinessuser} color="primary" className="waves-effect waves-light">Businessuser</Button>
                        </Col> */}

                        {/* <Col lg = "10">
                            {this.state.enduser ? <Enduser/> : <Businessuser/>} */}
                            {/* {this.state.businessuser ? <Businessuser/> : null} */}
                            {/* if (this.state.enduser) {
                                <Enduser/>
                            }
                            else {
                                <Businessuser/>
                            } */}
                        {/* </Col>     */}