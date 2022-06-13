import React, { Component } from 'react';

import { connect } from "react-redux";
import Enduser from "./enduser"
// import Businessuser from "./businessuser"

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
       
    }
  
  }

    componentDidMount(){
      this.props.setBreadcrumbItems("User Management", this.state.breadcrumbItems);
    }

   
    render() {
     
        
        return (
          <React.Fragment>
            <div>
              <Enduser/>
            </div>          
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Usermanagement);
