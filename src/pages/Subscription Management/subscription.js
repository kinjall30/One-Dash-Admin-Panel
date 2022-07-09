import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
//   import { Link } from "react-router-dom";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//url
import url from "../../helpers/apiUrl"

class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "One Dash", link : "#" },
                { title : "Subcription", link : "#" },  
            ],
          plan: [],
          productId: '',
          role:'',
          active: false,
          stripeId:'',
          paypalId:'',
          currency: '',
          name: '',
          unitLabel:'',
          price: '',
          interval: '',
          created_at: '',
          updated_at: '',
          modal_edit: false,
          shoppableMonthly: '',
          shoppableYearly: '',
          unlimitedMonthly: '',
          unlimitedYearly: '',
          switch1: false,
          monthly: true,
          stripePriceId: '',
          planid: ''
        }
       this.getAllPlans = this.getAllPlans.bind(this);
       this.updatePlane = this.updatePlane.bind(this);
       this.tog_edit = this.tog_edit.bind(this);
       this.changeHandler = this.changeHandler.bind(this);
       this.handleSwitchChange = this.handleSwitchChange.bind(this)
    }  

     handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
            monthly: !this.state.monthly,
        [switchNumber]: !this.state[switchNumber]
        });
    }

    componentDidMount(){
      this.props.setBreadcrumbItems("Subscription", this.state.breadcrumbItems);
      this.getAllPlans()
    }

     getAllPlans() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));


        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${url}/subscriptions/plans`, requestOptions)
        .then(response => response.json())
        .then(data => {
            var array = []
                for(let i=0; i< data.body.length; i++){
                    array.push({
                        planid: data.body[i]._id,
                        productId: data.body[i]._source.productId,
                        role: data.body[i]._source.role,
                        active: (data.body[i]._source.active).toString(),
                        name: data.body[i]._source.name,
                        unitLabel: data.body[i]._source.unitLabel,
                        price: "$ " + data.body[i]._source.price * 0.01,
                        interval: data.body[i]._source.interval,
                        stripePriceId: data.body[i]._source.stripeId,
                        paypalId: data.body[i]._source.paypalId,
                        currency: data.body[i]._source.currency,
                        created_at: data.body[i]._source.metadata.createdAt,
                        updated_at: data.body[i]._source.metadata.updatedAt,
                        button: 
                            <div>
                                <Button type="button"
                                    onClick={
                                        () => this.fillFaq(data.body[i])
                                    }
                                    style={
                                        {marginRight: 10}
                                    }
                                    color="primary"
                                    className="waves-effect waves-light">
                                    <i className="ion ion-md-arrow-round-forward"></i>
                                </Button>
                            </div>
                        
                    })
                }
                this.setState({
                    plan: array,
                    shoppableMonthly: array[3],
                    shoppableYearly: array[0],
                    unlimitedYearly: array[1],
                    unlimitedMonthly: array[2]
                })
                console.log(data)
        })
        .catch(error => console.log('error', error));

    }

    updatePlane(planid, stripePriceId) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"planId": planid,
         "stripepriceId": stripePriceId
        });
        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://${url}/subscriptions/update-plan`, requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.statusCode == "200"){
                this.tog_edit()
                setTimeout(this.getAllPlans(), 3000)
                // this.getAllPlans()

                this.setState({
                    planid: '',
                    stripePriceid: ''
                })
            }
           
        })
        .catch(error => console.log('error', error));


    }

    fillPlan(){
        this.tog_edit();
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
   
     tog_edit(planid, stripePriceId) {
        this.setState(prevState => ({
            modal_edit: !prevState.modal_edit,
            planid: planid,
            stripePriceId: stripePriceId
        }));
    }
    
  
    render() {
        //  const plans = {
        //     columns: [
        //         {
        //             label: 'Plan Name',
        //             field: 'name',
        //             sort: 'asc',
        //             width: 270
        //         },
        //         {
        //             label: 'Plan Lable',
        //             field: 'unitLabel',
        //             sort: 'asc',
        //             width: 200
        //         },
        //         {
        //             label: 'Active',
        //             field: 'active',
        //             sort: 'asc',
        //             width: 200
        //         },
        //         {
        //             label: 'Price',
        //             field: 'price',
        //             sort: 'asc',
        //             width: 100
        //         },
        //          {
        //             label: 'Duration',
        //             field: 'interval',
        //             sort: 'asc',
        //             width: 100
        //         },
        //          {
        //             label: 'Stripe Id',
        //             field: 'stripeId',
        //             sort: 'asc',
        //             width: 100
        //         },
        //          {
        //             label: 'Paypal Id',
        //             field: 'paypalId',
        //             sort: 'asc',
        //             width: 100
        //         },
        //          {
        //             label: 'Currency',
        //             field: 'currency',
        //             sort: 'asc',
        //             width: 100
        //         },
        //          {
        //             label: 'Role',
        //             field: 'role',
        //             sort: 'asc',
        //             width: 100
        //         },
        //          {
        //             label: 'Created At',
        //             field: 'created_at',
        //             sort: 'asc',
        //             width: 100
        //         },
        //         {
        //             label: 'Updated At',
        //             field: 'updated_at',
        //             sort: 'asc',
        //             width: 100
        //         },
        //         {
        //             label: 'Action',
        //             field: 'button',
        //             sort: 'asc',
        //             width: 100
        //         }
        //     ],
        //     rows: this.state.plan
        // };
        return (
            <React.Fragment>
                <h1>Subscription Details</h1>

            {/*
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardBody>
                                <MDBDataTable
                                    responsive
                                    bordered
                                    striped
                                    data={plans}      
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            */}
                 <div className='custom-control custom-switch align-item-center justify-content-center d-flex'>
                 <p style={{paddingRight: 45}}>Monthly</p>
                        <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitches'
                        checked={this.state.switch1}
                        onChange={this.handleSwitchChange(1)}
                        readOnly
                        />
                        
                        <label className='custom-control-label' htmlFor='customSwitches'>
                       Yearly
                        </label>
                    </div>
                
               
                {this.state.monthly ?  <Row className="align-item-center justify-content-center d-flex">
                <Col md="6" lg="6" xl="5" className="text-center">
                        <Card>
                            <CardBody>
                                <h3 className="card-title">{this.state.shoppableMonthly.name}</h3><br/>
                                <h5 className="card-subtitle font-14 text-muted">{this.state.shoppableMonthly.price}/mo</h5><br/>
                                <Button color="primary" onClick ={()=> this.tog_edit(this.state.shoppableMonthly.planid, this.state.shoppableMonthly.stripePriceid)}>Edit</Button>
                            </CardBody>
                            
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="5" className="text-center">
                        <Card>
                            <CardBody>
                                <h3 className="card-title">{this.state.unlimitedMonthly.name}</h3><br/>
                                <h5 className="card-subtitle font-14 text-muted">{this.state.unlimitedMonthly.price}/mo</h5><br/>
                                <Button color="primary"  onClick ={()=> this.tog_edit(this.state.unlimitedMonthly.planid, this.state.unlimitedMonthly.stripePriceid)}>Edit</Button>
                            </CardBody>
                        </Card>
                    </Col></Row> : 
                    <Row className="align-item-center justify-content-center d-flex">
                    <Col md="6" lg="6" xl="5" className="text-center">
                        <Card>
                            <CardBody>
                                <h3 className="card-title">{this.state.shoppableYearly.name}</h3><br/>
                                <h5 className="card-subtitle font-14 text-muted">{this.state.shoppableYearly.price}/yr</h5><br/>
                                <Button color="primary"  onClick ={()=> this.tog_edit(this.state.shoppableYearly.planid, this.state.shoppableYearly.stripePriceid)}>Edit</Button>
                            </CardBody>
                            
                        </Card>
                    </Col>
                    <Col md="6" lg="6" xl="5" className="text-center">
                        <Card>
                            <CardBody>
                                <h3 className="card-title">{this.state.unlimitedYearly.name}</h3><br/>
                                <h5 className="card-subtitle font-14 text-muted">{this.state.unlimitedYearly.price}/yr</h5><br/>
                                <Button color="primary"  onClick ={()=> this.tog_edit(this.state.unlimitedYearly.planid, this.state.unlimitedYearly.stripePriceid)}>Edit</Button>
                            </CardBody>
                        </Card>
                    </Col>
                      </Row>
                    }
                
                   {/* Editing Form */}
                <Row>     
                 <Modal
                     isOpen={this.state.modal_edit}
                     toggle={this.tog_edit}
                     autoFocus={true}
                     size = "lg"
                 >
                     <ModalHeader toggle={this.tog_edit}>
                        Edit Details
                     </ModalHeader>
                     <ModalBody>
                         <FormGroup row>
                             <Label for="example-text-input" className="col-sm-2 col-form-label">Stripe Price ID</Label>
                             <Col sm="10">
                                 <Input className="form-control" type="text" name="stripePriceId" value={this.state.stripePriceId || ''} onChange={this.changeHandler} id="example-text-input"/>
                             </Col>
                         </FormGroup>                         
                     </ModalBody>
                     <ModalFooter>
                         <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_edit}>Close</Button>
                         <Button type="button" color="primary" onClick={()=>this.updatePlane(this.state.planid, this.state.stripePriceId)} className="waves-effect waves-light">Save changes</Button>
                     </ModalFooter>                      
                 </Modal>
                </Row>  
                    
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Subscription);