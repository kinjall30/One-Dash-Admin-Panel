import React, { Component } from 'react';
import {
    Button,
    FormGroup,
    Label,
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

class WebsiteMarketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Browser", link : "#" },
                { title : "Marketing", link : "#" },
            ],
            
        }
       
    }  
    componentDidMount(){
        this.props.setBreadcrumbItems("Browser Marketing", this.state.breadcrumbItems);
      }
  
    render() {
        

        return (
            <React.Fragment>
                <h1>Push Notofication</h1>  
                <FormGroup>
                    <Label className="col-sm-2 col-form-label">Select</Label>
                        <div>
                            <select className="form-control">
                                <option>Users</option>
                                <option>Admin</option>
                                <option>Management Team</option>
                            </select>
                        </div>
                </FormGroup>  
                <FormGroup>
                    <div>
                        <textarea required placeholder='Enter Message' className="form-control" rows="5"></textarea>
                    </div>
                </FormGroup>
                <Button color="primary">Send</Button>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(WebsiteMarketing);