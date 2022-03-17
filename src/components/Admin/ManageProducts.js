import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Controllservices from '../../services/controllSrevices';
import Navbarcomponent from "./NavBarComponent";

class ManageProducts extends Component {
    constructor(props){
        super(props)

        this.state = {
            Products: []
        }
    };

    

    componentDidMount() {
       
        Controllservices.getAllProducts().then((res) =>{
            this.setState({
                Products: res.data
            });
        });
    }
   

    render() {
        return (
            <div>
                <Navbarcomponent/>
              <div className="container">
                <h2 className="text-center mt-2" style={{fontFamily:"fantasy"}}>Manage Poducts</h2>
                <div className="row">
                <button className="btn btn-primary" style={{width:"150px"}}>
                     <Link  to={"/addproduct"}> 
                      Add Sales Agents
                    </Link>  
                    </button>
                </div>
                <br></br>
                  <div className="row">
                     <table className="table table-striped table-bordered">
                         
                         <thead>
                             <tr>
                                 <th>ID</th>
                                 <th>Image</th>
                                 <th>Name</th>
                                 <th>Description</th>
                                 <th>Stock</th>
                                 <th>Price</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>

                         <tbody>
                             {
                                this.state.Products.map(
                                    Products =>
                                    <tr key={Products.id}>
                                        <td>{ Products.id }</td>
                                        <td><img src={ Products.imgurl } style={{width:"100px"}}/></td>
                                        <td>{ Products.productname }</td>
                                        <td style={{width:"250px"}}>{ Products.description }</td>
                                        <td>{ Products.stocks }</td>
                                        <td>Rs: { Products.price }</td>
                                        <td>
                                            <button className="btn btn-info btn-sm"><img src="https://img.icons8.com/windows/32/000000/change-user-female.png"/></button>
                                            <button className="btn btn-warning btn-sm" style={{marginLeft:"10px"}}><img src="https://img.icons8.com/material-outlined/24/000000/connection-status-off.png"/></button>
                                            <button className="btn btn-danger btn-sm"  style={{marginLeft:"10px"}}><img src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"/></button>
                                        </td>

                                    </tr>
                                )
                             }
                         </tbody>
                         
                     </table>
                  </div>
                </div>
            </div>
        );
    }
}

export default ManageProducts;