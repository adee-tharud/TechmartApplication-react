import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/Auth.service";
import Navbarcomponent from "./NavBarComponent";

class Managesalesagentscomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            salesAgents: []
        }  
    }

    componentDidMount() {
        AuthService.getAgents().then((res) =>{
            this.setState({ salesAgents: res.data});
        });
    }

    render() {
        return (
            <div>
                <Navbarcomponent/>
              <div className="container">
                <h2 className="text-center mt-2" style={{fontFamily:"fantasy"}}>Manage Sales Agents</h2>
                <div className="row">
                    <button className="btn btn-primary" style={{width:"150px"}}>
                     <Link  to={"/managesalesagentscomponent/_add"}> 
                      Add Sales Agents
                    </Link>  
                    </button>
                </div>
                <br></br>
                  <div className="row">
                     <table className="table table-striped table-bordered">
                         
                         <thead>
                             <tr>
                                 <th>Agent Name</th>
                                 <th>Email</th>
                                 <th>Branch</th>
                                 <th>Address</th>
                                 <th>Phone Number</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>

                         <tbody>
                             {
                                this.state.salesAgents.map(
                                    salesagent =>
                                    <tr key={salesagent.id}>
                                        <td>{ salesagent.username }</td>
                                        <td>{ salesagent.email }</td>
                                        <td>{ salesagent.branch }</td>
                                        <td>{ salesagent.address }</td>
                                        <td>{ salesagent.phonenumber }</td>
                                        <td>
                                            <button className="btn btn-info btn-sm"><img src="https://img.icons8.com/windows/32/000000/change-user-female.png"/></button>
                                        </td>

                                    </tr>
                                )
                             }
                         </tbody>
                         
                     </table>
                  </div>
                </div>
            </div>
        )
    }
}

export default Managesalesagentscomponent;