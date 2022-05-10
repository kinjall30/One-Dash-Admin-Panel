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
    Table,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchBar from "../../component/Layout/Menus/search-bar";
import Switch from "react-switch";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class IpManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "IP", link : "#" },
                { title : "Managemnet", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("IP Management", this.state.breadcrumbItems);
    }

  
    render() {
        function Offsymbol(text){
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#fff",
                  paddingRight: 2
                }}
              >
                {" "}
                {text}
              </div>
            );
          };

          function OnSymbol(text) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#fff",
                  paddingRight: 2
                }}
              >
                {" "}
                {text}
              </div>
            );
          };

        return (
            <React.Fragment>
               <h1>Block Ip via Country</h1> 
               <SearchBar/> 
               <Table>
                    <tr>
                        <td>Canada</td>
                        <td>
                            <Switch
                                uncheckedIcon={Offsymbol("Off")}
                                checkedIcon={OnSymbol("On")}
                                onColor="#626ed4"
                                onChange={() =>
                                this.setState({ switch1: !this.state.switch1 })
                                }
                                checked={this.state.switch1}
                                className="mr-1 mt-1"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>USA</td>
                        <td>
                            <Switch
                                uncheckedIcon={Offsymbol("Off")}
                                checkedIcon={OnSymbol("On")}
                                onColor="#626ed4"
                                onChange={() =>
                                this.setState({ switch1: !this.state.switch1 })
                                }
                                checked={this.state.switch1}
                                className="mr-1 mt-1"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>India</td>
                        <td>
                            <Switch
                                uncheckedIcon={Offsymbol("Off")}
                                checkedIcon={OnSymbol("On")}
                                onColor="#626ed4"
                                onChange={() =>
                                this.setState({ switch1: !this.state.switch1 })
                                }
                                checked={this.state.switch1}
                                className="mr-1 mt-1"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>UAE</td>
                        <td>
                            <Switch
                                uncheckedIcon={Offsymbol("Off")}
                                checkedIcon={OnSymbol("On")}
                                onColor="#626ed4"
                                onChange={() =>
                                this.setState({ switch1: !this.state.switch1 })
                                }
                                checked={this.state.switch1}
                                className="mr-1 mt-1"
                            />
                        </td>
                    </tr>
               </Table>

               <div>
                    <h1>Block By Individual Ip</h1>
                    <Label for="example-url-input" className="col-sm-2 col-form-label">Enter Ip or Domain</Label>
                    <FormGroup row>
                        <Col sm="10">
                            <Input className="form-control" type="text"  id="example-url-input"/>
                        </Col>
                    </FormGroup>
                    <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Block</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(IpManagement);