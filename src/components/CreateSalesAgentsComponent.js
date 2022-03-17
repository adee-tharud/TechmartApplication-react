import React, { Component } from "react";
import AuthService from "../services/Auth.service";

class CreateSalesAgentsComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username : '',
            email :'',
            branch : '',
            address : '',
            phonenumber: '',
            password : '',
            branches: [],
            success : false,
            message : "",
        }
        
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeRegBranchHandler = this.changeRegBranchHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeBranchHandler = this.changeBranchHandler.bind(this); 
    }

    // componentDidMount() {
    //     if(this.setState.id === '_add') {
    //         return
    //     }else{
    //         AuthService.getAgentsById(this.state.id).
    //         then( (res) => {
    //             let salesAgents = res.data;
    //             this.setState({
    //                 username : salesAgents.username,
    //                 email : salesAgents.email,
    //                 branch : salesAgents.branch,
    //                 address : salesAgents.address,
    //                 phonenumber : salesAgents.phonenumber,
    //                 password : salesAgents.password,
    //                 branches : salesAgents.branches,

    //             });
    //         });
    //     }
    // }

    addOrUpdateSalesAgent = (e) => {
        e.preventDefault();
        let salesAgents ={
            username: this.state.username,
            email: this.state.email,
            branch: this.state.branch,
            address: this.state.address,
            phonenumber: this.state.phonenumber,
            password: this.state.password,
            branches: this.state.branches
        };
        console.log("sales agent =>"+ JSON.stringify(salesAgents));
        
            AuthService.CreateSalesAgents(salesAgents).then((response)=>
            {
                this.setState({
                    success:true,
                    message:response.data.message,
                });
            },
            (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
                  this.setState({
                      message: resMessage
                  });
                }
            );
        
    }

    changeUsernameHandler = (event)=>{
        this.setState({username: event.target.value});
    }
    changeEmailHandler = (event)=> {
        this.setState({email: event.target.value});
    }
    changeRegBranchHandler = (event)=> {
        this.setState({branch: event.target.value});
    }
    changeAddressHandler = (event)=> {
        this.setState({address: event.target.value});
    }
    changePhoneHandler = (event)=> {
        this.setState({phonenumber: event.target.value});
    }
    changePasswordHandler = (event)=> {
        this.setState({password: event.target.value});
    }
    changeBranchHandler = (event)=> {
        this.setState({branches: [event.target.value]});
    }
    cancel(){
        this.props.history.push('/managesalesagentscomponent');
    }

    // renderTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add Employee</h3>
    //     }else{
    //         return <h3 className="text-center">Update Employee</h3>
    //     }
    // }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded">
                            {/* {
                                this.renderTitle()
                            } */}
                            <div className="card-body">
                                <form>
                                    <h2 className="text-center" style={{fontFamily:"fantasy"}}>Register Sales Agents</h2>
                                    <div className="form-group">
                                        <label>Agent Name:</label>
                                        <input placeholder="User Name" name="username" value={this.state.username} onChange={this.changeUsernameHandler} className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email Address" name="email" value={this.state.email} onChange={this.changeEmailHandler} className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Registered In:</label>
                                        <input placeholder="Registered In" name="RegBranch" value={this.state.branch} onChange={this.changeRegBranchHandler} className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Agent Branch:</label>
                                        <input placeholder="Branch of the agent" name="branch" value={this.state.branches} onChange={this.changeBranchHandler} className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input placeholder="Address" name="address" value={this.state.address} onChange={this.changeAddressHandler} className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Phone No:</label>
                                        <input placeholder="Phone Number" name="phonenumber" value={this.state.phonenumber} onChange={this.changePhoneHandler} className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input placeholder="Enter Password" name="password" value={this.state.password} onChange={this.changePasswordHandler} className="form-control"/>
                                    </div>

                                    {this.state.message && (
                                        <div className={this.state.success ?"alert alert-success" : "alert alert-danger"} role="alert">
                                            {this.state.message}
                                        </div>
                                    )}

                                    <button className="btn btn-success mt-2" onClick={this.addOrUpdateSalesAgent}>Save</button>
                                    <button className="btn btn-danger mt-2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateSalesAgentsComponent;