import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Subscription", link : "#" },
                { title : "Table", link : "#" },
            ],
        }
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Editable Table", this.state.breadcrumbItems);
    }

    render() {
        const products = [
            { id: 1, name: "Atik", subscription: "subscribed", plan: "monthly",innarplan: "unlimited", startdate: "12/10/2021", enddate: "3/10/2022", Edit: <i className="ion ion-md-trash"></i>},
            { id: 2, name: "Parth", subscription: "subscribed", plan: "monthly",innarplan: "unlimited", startdate: "12/10/2021", enddate: "3/10/2022", Edit: <i className="ion ion-md-trash"></i>},
            { id: 3, name: "Masud", subscription: "subscribed", plan: "monthly",innarplan: "unlimited", startdate: "12/10/2021", enddate: "3/10/2022"},
            { id: 4, name: "Mitul", subscription: "subscribed", plan: "monthly",innarplan: "unlimited", startdate: "12/10/2021", enddate: "3/10/2022"},
          ];
          
          const columns = [
            {
              dataField: "id",
              text: "Customer ID"
            },
            {
              dataField: "name",
              text: "Name"
            },
            {
              dataField: "subscription",
              text: "Subscription"
            },
            {
                dataField: "plan",
                text: "Plan"
            },
            {
                dataField: "innarplan",
                text: "Plan Details"
            },
            {
                dataField: "startdate",
                text: "Start Date"
              },
              {
                dataField: "enddate",
                text: "End Date"
              },
              {
                dataField: "edit",
                text: "Edit"
              },
          ];

        return (
            <React.Fragment>
                    <Row>
                        <Col xs="12">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Subscription Details</h4>
                                   
                                    <div className="table-responsive">
                                        <BootstrapTable
                                            keyField="id"
                                            data={products}
                                            columns={columns}
                                            cellEdit={cellEditFactory({ mode: "click" })}
                                        />
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>        
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Subscription);