import React, { Component } from 'react';
import Controllservices from '../../services/controllSrevices';

class Delivery extends Component {

    constructor(props){
        super(props)

        this.state = {
            delivery: []
        }
    };

    componentDidMount() {
       
        Controllservices.getAllDelivery().then((res) =>{
            this.setState({
                delivery: res.data
            });
        });
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <h2>Delivery Deatails</h2>
                  {this.state.delivery.map(delivery=>
                  <div className='card' key={delivery.driver}>
                       <div className="card-body">
                            <div className='row'>
                                <div className='col'>
                                   <img src={delivery.imgurl} alt="No image" className='img-thumbnail' style={{width:"200px", height:"200px"}}/>
                                </div>
                                <div className='col'>
                                    <div className='deatails mt-2'>
                                        <p className="card-text"> <b>Driver Name:</b> {delivery.driver} </p>
                                        <p className="card-text"> <b>quantity:</b> {delivery.vehicletype}</p>
                                        <p className="card-text"> <b>status:</b> {delivery.licence}</p>
                                        <p className="card-text"> <b>date:</b> {delivery.phonenumber}</p>
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

export default Delivery;