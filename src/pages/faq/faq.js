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
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "FAQ", link : "#" },
                { title : "Questions", link : "#" },
            ],
            
        }
        this.t_col1 = this.t_col1.bind(this);
        this.t_col2 = this.t_col2.bind(this);
        this.t_col3 = this.t_col3.bind(this);
        this.t_col5 = this.t_col5.bind(this);
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("FAQ", this.state.breadcrumbItems);
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

    render() {
        

        return (
            <React.Fragment>
                    <Col lg="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Frequently Asked Questions</h4>
                                    <p className="card-title-desc">Here are some randomly asked questions.</p>

                                    <div id="accordion">
                                        <div className="card mb-1 shadow-none">
                                            <div className="card-header p-3" id="headingOne">
                                                <h6 className="m-0 font-size-14">
                                                    <Link
                                                        to="#"
                                                        className="text-dark"
                                                        onClick={this.t_col1} 
                                                        style={{ cursor : "pointer" }}
                                                    >
                                                        What is One Dash?
                                                    </Link>
                                                </h6>
                                            </div>

                                            <Collapse isOpen={this.state.col1}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </CardBody>
                                            </Collapse>
                                        </div>
                                        <div className="card mb-1 shadow-none">
                                            <div className="card-header p-3" id="headingTwo">
                                                <h6 className="m-0 font-size-14">
                                                <Link
                                                        to="#"
                                                        className="text-dark"
                                                        onClick={this.t_col2} 
                                                        style={{ cursor : "pointer" }}
                                                    >
                                                       How can I use One Dash?
                                                    </Link>
                                                </h6>
                                            </div>
                                            <Collapse isOpen={this.state.col2}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </CardBody>
                                            </Collapse>
                                        </div>
                                        <div className="card mb-1 shadow-none">
                                            <div className="card-header p-3" id="headingThree">
                                                <h6 className="m-0 font-size-14">
                                                <Link
                                                        to="#"
                                                        className="text-dark"
                                                        onClick={this.t_col3} 
                                                        style={{ cursor : "pointer" }}
                                                    >
                                                        How to upgrade my account?
                                                    </Link>
                                                </h6>
                                            </div>
                                            <Collapse isOpen={this.state.col3}>
                                                <CardBody>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </CardBody>
                                            </Collapse>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Faq);