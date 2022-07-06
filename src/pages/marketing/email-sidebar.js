import React, { Component } from 'react';
// import { Media} from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
// import user2 from "../../assets/images/users/user-2.jpg";
// import user3 from "../../assets/images/users/user-3.jpg";
// import user4 from "../../assets/images/users/user-4.jpg";
// import user6 from "../../assets/images/users/user-6.jpg";

class EmailSidebars extends Component {
    render() {
        return (
            <React.Fragment>
                            {/* left sidebar start */}
                            <div className="email-leftbar card">
                                <Link to="/email-compose" className="btn btn-danger rounded btn-custom btn-block waves-effect waves-light">Compose</Link>

                                <div className="mail-list mt-3">
                                    <Link to="#" className="active">Inbox <span className="ml-1">(18)</span></Link>
                                    <Link to="#">Starred</Link>
                                    <Link to="#">Important</Link>
                                    <Link to="#">Draft</Link>
                                    <Link to="#">Sent Mail</Link>
                                    <Link to="#">Trash</Link>
                                </div>
                            </div>
                            {/* left sidebar over */}
            </React.Fragment>
        );
    }
}

export default EmailSidebars;