import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";


class EmailProjectMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Email", link : "#" },
            ],
            
        }
       
    }  

    componentDidMount(){
      this.props.setBreadcrumbItems("Email", this.state.breadcrumbItems);
    }

  
    render() {
        

        return (
            <React.Fragment>
                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(EmailProjectMan);