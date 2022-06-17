import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Modal,
  Table,
  ModalHeader,
  ModalBody,
  ModalFooter,
    Input,
} from "reactstrap";
import { connect } from "react-redux";

import SweetAlert from "react-bootstrap-sweetalert";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../store/actions";

class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Users", link : "#" },
            ],
           items: [] 
        }
       
    }

    async componentDidMount(){
        this.props.setBreadcrumbItems("Portal Users", this.state.breadcrumbItems);
    //     let url = "http://44.196.105.0:3000/adminusers";
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //    console.log(parseData);
        fetch(
            "http://44.196.105.0:3000/adminusers")
                // .then((res) => res.json())
                // .then((data) => {
                //     console.log(data)
                // })
    }


    render() {

       
        return (
            <React.Fragment>
            
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Dummy);
