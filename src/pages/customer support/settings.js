import React, {Component} from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Collapse,
    Button,
    FormGroup,
    Input,
    Label,
    Table,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Modal
} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

// Import Action to copy breadcrumb items from local state to redux state
import {setBreadcrumbItems} from "../../store/actions";

// Editable
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

class SettingsCustSupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {
                    title: "One Dash",
                    link: "#"
                }, {
                    title: "Settings",
                    link: "#"
                }
            ],
            modal_add_pri:false,
            modal_add: false,
            modal_edit: false,
            category: [],
            priority: [],
            id: '',
            category_name: '',
            category_description: '',
            category_status: '',
            arr: []
        }
        this.deletesupportCategory = this.deletesupportCategory.bind(this);
         this.changeHandler = this.changeHandler.bind(this);
         this.tog_add = this.tog_add.bind(this);
         this.tog_edit = this.tog_edit.bind(this);
         this.tog_add_priority = this.tog_add_priority.bind(this);
         this.createSupportPriority = this.createSupportPriority.bind(this);
         this.viewsupportCategoryById = this.viewsupportCategoryById.bind(this);
         this.fillUser = this.fillUser.bind(this);
         this.updatesupportCategory = this.updatesupportCategory.bind(this);
         this.viewsupportCategory = this.viewsupportCategory.bind(this)
    }

    componentDidMount() {
        this.props.setBreadcrumbItems("Complains", this.state.breadcrumbItems);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var raw = "";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                category: result.body
            })
        })
        .catch(error => console.log('error', error));

        

        fetch("http://44.196.105.0:3000/priority/support", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                priority: result.body
            })
            var arr2 = []
              result.body.forEach((item) => {
                arr2.push(<tr>
                            <td> {item.id} </td>
                            <td> {item.priority_name} </td>
                            <td> {item.priority_description} </td>
                            <td> {item.priority_status} </td>
                            <td> {item.created_at} </td>
                            <td> {item.updated_at} </td>
                            <td>
                                <Button type="button"
                                    onClick={
                                        () => this.fillUser(item.id)
                                    }
                                    style={
                                        {marginRight: 10}
                                    }
                                                            color="primary"
                                                            className="waves-effect waves-light">
                                                            <i className="ti-pencil"></i>
                                                        </Button>
                                                        <Button type="button" color="danger"
                                                           onClick = {()=> this.deletesupportCategory(item.id)}
                                                            className="waves-effect waves-light">
                                                            <i className="ti-trash"></i>
                                                        </Button>
                                                    </td>
                                                </tr>);

        })
        this.setState({
            arr: arr2
        })
        })
        .catch(error => console.log('error', error));

    }

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
        .then(response => response.json())
        .then(result => {
             this.setState({
                category: result.body
            })
        })
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

  changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
     deletesupportCategory(id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/" + id, requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({
                category: this.state.category.filter(cat => cat.id != id)
            })
        })
        .catch(error => console.log('error', error));

   }

    createSupportPriority(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "category_name": this.state.category_name,
    "category_description": this.state.category_description,
    "category_status": this.state.category_status
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://44.196.105.0:3000/category/support/create", requestOptions)
    .then(response => response.json())
    .then(result => {
        this.viewsupportCategory()
        this.tog_add()
        this.setState({
            category_name: '',
            category_description: '',
            category_status: ''
        })
    })
    .catch(error => console.log('error', error));
   }

    // fillUser = (id) => {

    //     this.tog_edit();
    // }

     fillUser = (id, category_name, category_description, category_status) => {
        this.setState({
            id: id,
            category_name: category_name,
            category_description:category_description,
            category_status: category_status
        })
        this.tog_edit();
    }

     updatesupportCategory(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+ localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "category_name": this.state.category_name, 
            "category_description": this.state.category_description, 
            "category_status": this.state.category_status
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://44.196.105.0:3000/category/support/create/1", requestOptions)
        .then(response => response.json())
        .then(result =>{
            this.viewsupportCategory();
            this.tog_edit()
            this.setState({
                id: '',
                category_name: '',
                category_description: '',
                category_status: ''
            })
        })
        .catch(error => console.log('error', error));

   }

   tog_add() {
        this.setState(prevState => ({
            modal_add: !prevState.modal_add
        }));
    }

     tog_edit() {
        this.setState(prevState => ({
            modal_edit: !prevState.modal_edit
        }));
    }

    tog_add_priority(){
          this.setState(prevState => ({
            modal_add_pri: !prevState.modal_add_pri
        })); 
    }

    render() {
        const {priority} = this.state
         const {category} = this.state
        return (
            <React.Fragment>
                <div>
                    <h4>Support Category</h4>
                </div>

                 <Button type="button"
                        onClick={
                            this.tog_add
                        }
                        style={{marginBottom: 10}}
                        color="info"
                        className="waves-effect waves-light">
                        Add Category</Button>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table table-hover table-bordered  mb-0">
                                        <thead>
                                            <tr>
                                                <th>Category Id</th>
                                                <th>Category Name </th>
                                                <th>Category Description</th>
                                                <th>Status</th>
                                                <th>Created At</th>
                                                <th>updated At</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                          {
                                            category.map((cat) => (
                                                <tr>
                                                    <td> {cat.id} </td>
                                                    <td> {cat.category_name} </td>
                                                    <td> {cat.category_description} </td>
                                                    <td> {cat.category_status} </td>
                                                    <td> {cat.created_at} </td>
                                                    <td> {cat.updated_at} </td>
                                                     <td>
                                                        <Button type="button"
                                                            onClick={
                                                                () => this.fillUser(cat.id, cat.category_name, cat.category_description, cat.category_status)
                                                            }
                                                            style={
                                                                {marginRight: 10}
                                                            }
                                                            color="primary"
                                                            className="waves-effect waves-light">
                                                            <i className="ti-pencil"></i>
                                                        </Button>
                                                        <Button type="button" color="danger"
                                                           onClick = {()=> this.deletesupportCategory(cat.id)}
                                                            className="waves-effect waves-light">
                                                            <i className="ti-trash"></i>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                          }
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
                

                <div>
                    <h4>Support Priority</h4>
                </div>

                 <Button type="button"
                        onClick={
                            this.tog_add_priority
                        }
                        style={{marginBottom: 10}}
                        color="info"
                        className="waves-effect waves-light">
                        Add Priority
                    </Button>
                 <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table className="table table-hover table-bordered  mb-0">
                                        <thead>
                                            <tr>
                                                <th>Priority Id</th>
                                                <th>Priority Name </th>
                                                <th>Priority Description</th>
                                                <th>Status</th>
                                                <th>Created At</th>
                                                <th>updated At</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody> 
                                        {this.state.arr}
                                        {/*  {
                                            priority.map((pri) => (
                                                <tr>
                                                    <td> {pri.id} </td>
                                                    <td> {pri.priority_name} </td>
                                                    <td> {pri.priority_description} </td>
                                                    <td> {pri.priority_status} </td>
                                                    <td> {pri.created_at} </td>
                                                    <td> {pri.updated_at} </td>
                                                    <td><Link to="customercomplain"><Button type="button" style = {{marginRight: 10}} color="primary" className="waves-effect waves-light">Open</Button> </Link></td>
                                                </tr>
                                            ))
                                          } */}
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                  {/* Adding new priority form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_add_pri
                        }
                        toggle={
                            this.tog_add_priority
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_add_priority
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Priority Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="priority_name" type="text"
                                        value={
                                            this.state.priority_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Priority Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="priority_description" type="text"
                                        value={
                                            this.state.priority_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='priority_status'
                                        value={
                                            this.state.priority_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>
                         </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_add
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.createSupportPriority()
                                }
                                className="waves-effect waves-light">Add Priority</Button>
                        </ModalFooter>
                    </Modal>
                </Row>


                 {/* Adding new category form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_add
                        }
                        toggle={
                            this.tog_add
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_add
                        }>
                            Add Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_name" type="text"
                                        value={
                                            this.state.category_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_description" type="text"
                                        value={
                                            this.state.category_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='category_status'
                                        value={
                                            this.state.category_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>
                         </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_add
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.createSupportPriority()
                                }
                                className="waves-effect waves-light">Add Category</Button>
                        </ModalFooter>
                    </Modal>
                </Row>

                
                 {/* Editing category form */}
                <Row>
                    <Modal isOpen={
                            this.state.modal_edit
                        }
                        toggle={
                            this.tog_edit
                        }
                        autoFocus={true}
                        size="lg">
                        <ModalHeader toggle={
                            this.tog_edit
                        }>
                            Edit Details
                        </ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Name</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_name" type="text"
                                        value={
                                            this.state.category_name
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-text-input" className="col-sm-2 col-form-label">Category Description</Label>
                                <Col sm="10">
                                    <Input className="form-control" name="category_description" type="text"
                                        value={
                                            this.state.category_description
                                        }
                                        onChange
                                        ={this.changeHandler}
                                        id="example-text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="example-password-input" className="col-sm-2 col-form-label">Status</Label>
                                <Col sm="10">
                                    <select className="form-control" name='category_status'
                                        value={
                                            this.state.category_status
                                        }
                                        onChange={
                                            this.changeHandler
                                    }>
                                        <option>Select</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </Col>
                            </FormGroup>
                         </ModalBody>
                        <ModalFooter>
                            <Button type="button" color="secondary" className="waves-effect"
                                onClick={
                                    this.tog_add
                            }>Close</Button>
                            <Button type="button" color="primary"
                                onClick={
                                    () => this.updatesupportCategory()
                                }
                                className="waves-effect waves-light">Save</Button>
                        </ModalFooter>
                    </Modal>
                </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, {setBreadcrumbItems})(SettingsCustSupport);

