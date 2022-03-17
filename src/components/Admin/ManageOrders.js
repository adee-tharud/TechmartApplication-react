import React, { Component } from 'react';
import Controllservices from '../../services/controllSrevices';
import Navbarcomponent from './NavBarComponent';

class ManageOrders extends Component {

    constructor(props){
        super(props)

        this.state = {
            CustomerOrders: []
        }
    };

    componentDidMount() {
        Controllservices.getAllOrders().then((res) =>{
            this.setState({
                CustomerOrders: res.data
            });
        });
    }
    render() {
        return (
            <div>
                <Navbarcomponent/>
              <div className="container">
                <h2 className="text-center mt-2" style={{fontFamily:"fantasy"}}>Manage Orders</h2>
                <br></br>
                  <div className="row">
                     <table className="table table-striped table-bordered">
                         
                         <thead>
                             <tr>
                                 <th>ID</th>
                                 <th>Image</th>
                                 <th>Poduct name</th>
                                 <th>Customer Name</th>
                                 <th>Quantity</th>
                                 <th>Actions</th>
                             </tr>
                         </thead>

                         <tbody>
                             {
                                this.state.CustomerOrders.map(
                                    CustomerOrders =>
                                    <tr key={CustomerOrders.id}>
                                        <td>{ CustomerOrders.id }</td>
                                        <td><img src={ CustomerOrders.img } style={{width:"100px"}}/></td>
                                        <td>{ CustomerOrders.product }</td>
                                        <td>{ CustomerOrders.user }</td>
                                        <td>{ CustomerOrders.quantity }</td>
                                        <td>
                                            <button className="btn btn-info btn-sm">Confirm</button>
                                            <button className="btn btn-danger btn-sm" style={{marginLeft:"10px"}}>Reject</button>
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

export default ManageOrders;