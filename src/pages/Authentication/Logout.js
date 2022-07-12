import React, { Component } from 'react';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        // Remove all Item from localstorage and redirect to login page
        localStorage.removeItem('token');
        sessionStorage.clear();
        this.props.history.push('/login');
        console.log(sessionStorage)
        localStorage.clear()
    }



    render() {
        return (
            <React.Fragment>
               <h1>&nbsp;</h1>
            </React.Fragment>
        );
    }
}


export default Logout;

