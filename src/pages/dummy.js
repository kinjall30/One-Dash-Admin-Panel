import React, {Component} from 'react';
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
    Input
} from "reactstrap";
import {connect} from "react-redux";

import SweetAlert from "react-bootstrap-sweetalert";

// Import Action to copy breadcrumb items from local state to redux state
import {setBreadcrumbItems} from "../store/actions";

class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {
                    title: "One Dash",
                    link: "#"
                }, {
                    title: "Users",
                    link: "#"
                },
            ],
            items: [],
            planid: "",
            stripePriceid: ""
        }
        this.getAllPlans = this.getAllPlans.bind(this);
        this.updatePlane = this.updatePlane.bind(this);
        this.getSubscriptionDetails = this.getSubscriptionDetails.bind(this);
        this.cancleUserPlan = this.cancleUserPlan.bind(this);
        this.viewAllFaq = this.viewAllFaq.bind(this);
        this.createFaq = this.createFaq.bind(this);
        this.deleteFaq = this.deleteFaq.bind(this);
        this.updateFaq = this.updateFaq.bind(this);
        this.viewFaqCategory = this.viewFaqCategory.bind(this);
        this.viewFaqCategoryById = this.viewFaqCategoryById.bind(this);
        this.deleteFaqCategory = this.deleteFaqCategory.bind(this);
        this.createFaqCategory = this.createFaqCategory.bind(this);
        this.updateFaqCategory = this.updateFaqCategory.bind(this);
        this.viewsupportCategory = this.viewsupportCategory.bind(this);
        this.viewsupportCategoryById = this.viewsupportCategoryById.bind(this);
        this.deletesupportCategory = this.deletesupportCategory.bind(this);
        this.createsupportCategory = this.createsupportCategory.bind(this);
        this.updatesupportCategory = this.updatesupportCategory.bind(this);
        this.createSupportPriority = this.createSupportPriority.bind(this);
        this.updateSupportPriority = this.updateSupportPriority.bind(this);
        this.vieallSupportPriority = this.vieallSupportPriority.bind(this);
        this.viewPriorityById = this.viewPriorityById.bind(this);
        this.deletePriority = this.deletePriority.bind(this);
        this.viewSupportLog = this.viewSupportLog.bind(this);
        this.viewSupportLogById = this.viewSupportLogById.bind(this);
        this.changeTicketStatus = this.changeTicketStatus.bind(this);
        this.assignTicketToEngineer = this.assignTicketToEngineer.bind(this);
    }

    componentDidMount() {
        this.props.setBreadcrumbItems("Portal Users", this.state.breadcrumbItems);

    }

    getAllPlans() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/subscriptions/plans", requestOptions).then(response => response.json()).then(result => console.log(result)).catch(error => console.log('error', error));

    }

    updatePlane(planid, stripePriceid) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"planId": "", "stripepriceId": ""});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/subscriptions/update-plan", requestOptions).then(response => response.json()).then(result => console.log(result)).catch(error => console.log('error', error));


    }

    getSubscriptionDetails() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"sub": "79725476-a6a3-4467-be84-a211968a3b7d"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/endusers/subscription", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

    }

    cancleUserPlan() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"sub": ""});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/subscriptions/cancel-user", requestOptions).then(response => response.json()).then(result => console.log(result)).catch(error => console.log('error', error));

    }

    //FAQ

    viewAllFaq(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

   createFaq(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "category_id": "4",
        "faq_topic": "Projects",
        "faq_answer": "We have large range of projects",
        "faq_status": "Active"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   deleteFaq(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/4", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   faqById(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/3", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   updateFaq(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_id": "1", "faq_topic": "Product", "faq_answer": "We have large range of products", "faq_status": "Active"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/faq/create/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   viewFaqCategory(){
       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var raw = "";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

   }

   viewFaqCategoryById(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   deleteFaqCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/0", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   createFaqCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_name": "Test", "category_description": "This category is for test", "category_status": "Active"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/create", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   updateFaqCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_name": "Support FAQ", "category_description": "This category is for support", "category_status": "Active"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/faq/create/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }


   //Support
   viewsupportCategory(){
       var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var raw = "";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

   }

   viewsupportCategoryById(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   deletesupportCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/0", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   createsupportCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_name": "Test", "category_description": "This category is for test", "category_status": "Active"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/create", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   updatesupportCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"category_name": "Support support", "category_description": "This category is for support", "category_status": "Active"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/create/1", requestOptions).then(response => response.text()).then(result => console.log(result)).catch(error => console.log('error', error));

   }

   createSupportPriority(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "category_name": "Support",
    "category_description": "This category is for support",
    "category_status": "Active"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://44.196.105.0:3000/category/support/create", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
   }

   updateSupportPriority(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "priority_name": "Medium",
        "priority_description": "Medium",
        "priority_status": "Active"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/create/2", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   vieallSupportPriority(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   viewPriorityById(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   deletePriority(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/priority/support/3", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   viewSupportLog(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/support/log", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   viewSupportLogById(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/support/log/2", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   changeTicketStatus(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "ticket_status": "New"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/support/log/status/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   assignTicketToEngineer(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "ticket_assignment": "1"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/support/log/assignment/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
   }

   

    render() {
       
        // this.getAllPlans();
        // this.updatePlane();
        // this.getSubscriptionDetails();
        // this.cancleUserPlan();
        // this.viewAllFaq();
        // this.createFaq();
        // this.deleteFaq();
        // this.faqById();
        // this.updateFaq();
        // this.viewFaqCategory();
        // this.viewFaqCategoryById();
        // this.deleteFaqCategory();
        // this.createFaqCategory();
        // this.updateFaqCategory();

        // this.viewsupportCategory();
        // this.viewsupportCategoryById();
        // this.deletesupportCategory();
        // this.createsupportCategory();
        // this.updatesupportCategory();
         // this.createSupportPriority();
        // this.updateSupportPriority();
        // this.vieallSupportPriority();
        // this.viewPriorityById();
        // this.deletePriority();
        // this.viewSupportLog();
        // this.viewSupportLogById();
        // this.changeTicketStatus();
        // this.assignTicketToEngineer();
        return (<React.Fragment></React.Fragment>);
    }
}

export default connect(null, {setBreadcrumbItems})(Dummy);
