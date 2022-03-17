import React, { Component } from 'react';
import AuthService from '../../services/Auth.service';
import Controllservices from '../../services/controllSrevices';
import NavBar from './NavBar';

class MyOders extends Component {

    constructor(props){
        super(props)

        this.state = {
            orders: []
        }
    };

    componentDidMount(){
        Controllservices.getOrdersDoneByUser(AuthService.getCurrentUser().id).then((response) =>{
            this.setState({
                orders : response.data
            });
        });
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className='container'>
                    <h2>MyOders</h2>
                    <hr/>
                    {this.state.orders.map(orders =>
                    <div className="card" key={orders.product}>
                        <h5 className="card-header">{orders.product}</h5>
                        <div className="card-body">
                            <div className='row'>
                            <div className='col'>
                            <img src={orders.img} alt="No image" className='img-thumbnail' style={{width:"200px", height:"200px"}}/>
                            </div>
                            <div className='col'>
                                <div className='deatails mt-2'>
                            <p className="card-text">Rs. {orders.price} </p>
                            <p className="card-text">quantity: {orders.quantity}</p>
                            <p className="card-text">status: {orders.state}</p>
                            <p className="card-text">date: {orders.date}</p>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                       
                    )} 
                 </div>
                 
            </div>
        );
    }
}

export default MyOders;