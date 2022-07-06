import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class Tax extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            
        };
    }
    

    componentDidMount() {
        
    }

  
    render() {
        return (
            <React.Fragment>
            <p>Hello</p>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Tax);