import React, { Component } from 'react';
import {
    Col,
    Row,
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { MDBDataTable } from 'mdbreact';

// // Editable
// import BootstrapTable from "react-bootstrap-table-next";
// import cellEditFactory from "react-bootstrap-table2-editor";

class MySupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "My", link : "#" },
                { title : "Support", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("My Support", this.state.breadcrumbItems);
    }

  
    render() {
        const data = {
            columns: [
                {
                    label: 'Priority',
                    field: 'priority',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Ticket Key',
                    field: 'tkey',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Ticket Name',
                    field: 'tname',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Created',
                    field: 'created',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Owners Name',
                    field: 'oname',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: '',
                    field: 'buttons',
                    sort: 'but',
                    width: 250
                },
            ],rows: [
                {
                    priority: 'Urgent',
                    tkey: 'T-12356',
                    tname: 'Need Help with Downloading',
                    created: '10th May 2022',
                    oname: 'Kinjal Prajapati',
                    buttons: [ <Link to="customercomplain"><Button type="button" onClick={this.tog_standard} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button> </Link>, 
                    ],
                   
                },
                {
                    priority: 'Urgent',
                    tkey: 'T-85974',
                    tname: 'Update Email',
                    created: '9th May 2022',
                    oname: 'Atul Shah',
                    buttons: [ <Link to="customercomplain"><Button type="button" onClick={this.tog_standard} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button> </Link>, 
                    ],
                },
                {
                    priority: 'On hold',
                    tkey: 'T-25478',
                    tname: 'Billing needs update',
                    created: '8th May 2022',
                    oname: 'Shivani Patel',
                    buttons: [ <Link to="customercomplain"><Button type="button" onClick={this.tog_standard} style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button> </Link>, 
                ],
                   
                },
            ]
        }

        return (
            <React.Fragment>
                <h3>My Tickets</h3> 
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

export default connect(null, { setBreadcrumbItems })(MySupport);