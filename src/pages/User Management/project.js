import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    
    Button,
    Table
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

import SearchBar from "../../component/Layout/Menus/search-bar";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Projects", link : "#" },
              
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Projects", this.state.breadcrumbItems);
    }

  
    render() {

        return (
            <React.Fragment>
            <Col xs="4">
                <SearchBar/>
            </Col>
            <Row>
            <Col lg="12">
                <Card>
                    <CardBody>
                        <div className="table-responsive">
                            <Table className="table table-hover   mb-0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Kinjal</td>
                                        <td>Prajapati</td>
                                        <td>kinjall</td>
                                        <td>kinjal@gmail.com</td>
                                        <td>
                                            <Link to="userproject"> <Button type="button" style = {{marginRight: 10,}} color="primary" className="waves-effect waves-light"><i className='ti-eye'></i></Button></Link>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Atul</td>
                                        <td>Shah</td>
                                        <td>atulsh</td>
                                        <td>atul@gmail.com</td>
                                        <td>
                                            <Link to="userproject"> <Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className='ti-eye'></i></Button> </Link>                                          
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Margi</td> 
                                        <td>Patel</td> 
                                        <td>margiP</td>
                                        <td>margi@gmail.com</td>                                      
                                        <td>
                                            <Link to="userproject"><Button type="button" onClick={this.tog_edit} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light"><i className='ti-eye'></i></Button></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Project);