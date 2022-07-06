import React, {Component} from 'react';
import {connect} from "react-redux";
import {Row, Card, CardBody} from "reactstrap";

import exclmation from "../assets/exclamation.png"
// Import Action to copy breadcrumb items from local state to redux state
import {setBreadcrumbItems} from "../store/actions";

class NoAccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {
                    title: "One Dash",
                    link: "#"
                }, {
                    title: "No Excess",
                    link: "#"
                },

            ]

        }

    }

    componentDidMount() {
        this.props.setBreadcrumbItems("No Excess", this.state.breadcrumbItems);

    }


    render() {
        return (
            <React.Fragment>

                <Row>

                    <Card className="text-white "
                        style={
                            {
                                padding: 30,
                                marginLeft: 100
                            }
                    }>
                        <img src={exclmation}
                            style={
                                {
                                    height: 80,
                                    width: 80,
                                    position: "relative",
                                    left: 350
                                }
                        }></img>
                        <h1>Sorry! You don't have access to this information.</h1>
                        <CardBody>
                            <blockquote className="card-blockquote mb-0">
                                <h5>If something is wrong please contact admin.</h5>
                                <h5>Thank You.</h5>
                            </blockquote>
                        </CardBody>
                    </Card>

                </Row>

            </React.Fragment>
        );
    }
}

export default connect(null, {setBreadcrumbItems})(NoAccess);
