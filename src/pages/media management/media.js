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

import { MDBDataTable } from 'mdbreact';


// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class MediaFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Media", link : "#" },
                { title : "Management", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Media Management", this.state.breadcrumbItems);
    }

  
    render() {
        
        const data = {
            columns: [
                {
                    label: 'Customer Id',
                    field: 'customerid',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Username',
                    field: 'username',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '',
                    field: 'buttons',
                    sort: 'but',
                    width: 250
                },
            ],rows: [
                {
                    customerid: '1',
                    username: 'TigerNixon',
                    email: 'abc@gmail.com',
                    buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
                    ],
                   
                },
                {
                  customerid: '2',
                  username: 'AtikK',
                  email: 'atik@gmail.com',
                  buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
                ],
                 
              },
              {
                customerid: '3',
                username: 'KinjalP',
                email: 'kinjal@gmail.com',
                buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
            ],
               
            },
            {
              customerid: '4',
              username: 'Masud',
              email: 'masud@gmail.com',
              buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
            ],
          },
          {
            customerid: '5',
            username: 'Mital',
            email: 'mital@gmail.com',
            buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
        ],
           
        },{
          customerid: '6',
          username: 'Parth',
          email: 'parth@gmail.com',
          buttons: [ <Button type="button" onClick={this.tog_large} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button>, 
        ],
      },
            ]
        };
        return (
            <React.Fragment>
            <Row lg="12">
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
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(MediaFile);