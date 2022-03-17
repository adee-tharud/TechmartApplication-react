import React, { Component } from 'react';
import AuthService from '../../services/Auth.service';
import Controllservices from '../../services/controllSrevices';
import NavBar from './NavBar';


class BuyProductpage extends Component{

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            quentityvalue: "",
            Products: {},
            Product: "",
            userid: "",
            img: "",
            user: "",
            address: "",
            quantity: "",
            branch: "colombo",
            date: new Date().toLocaleString(),
            state: "Pending",
            success: false,
            confirmedby: "",
            message: ""
        }

        this.quentityvalueHandler = this.quentityvalueHandler.bind(this);
    }

    componentDidMount() {
        Controllservices.findProductById(this.state.id).then((res) => {
            this.setState({
                Product: res.data
            });
            console.log("Address => " +AuthService.getCurrentUser().address)
        })
    }

    quentityvalueHandler = (event)=> {this.setState({quentityvalue: event.target.value});}

    addOrder = (e) => {
        e.preventDefault();
        let order= {
            product: this.state.Product.productname,
            img: this.state.Product.imgurl,
            userid: AuthService.getCurrentUser().id,
            user: AuthService.getCurrentUser().username,
            address: AuthService.getCurrentUser().address,
            quantity: this.state.quentityvalue,
            date: this.state.date,
            branch: this.state.branch,
            state: this.state.state
        }
        Controllservices.addNewOrder(order).then((res) => {
            this.setState({
                success: true,
                message: res.data.message,
            });
        },(error) => {
            const resMessage = 
            (error.res && 
                error.res.data &&
                error.res.data.message) ||
                error.message ||
                error.toString();
                this.setState({
                    message: resMessage,
                });
           },
        );
    }

    render() {
        return (
            <div>
                <NavBar/>
                 <div className='container'>
                     <div className='row'>
                         <div className='card card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded'>
                             <div className='card-header'><h2>{this.state.Product.productname}</h2></div>
                             <div className='card-body mt-3'>
                                 <img src={this.state.Product.imgurl} alt="NoImage" className='img-thumbnail' style={{width:"300px", height:"300px"}}/>
                                 <h4 className='mt-3'>{this.state.Product.description}</h4>
                                 <hr/>

                                 <span className='text-danger'>Only {this.state.Product.stocks} Left</span>
                                 <br/>
                                 <span>Product Price</span>
                                 <h3>Rs {this.state.Product.price}</h3>
                                <span>Total Amount</span>                   
                                 <h2>Rs {this.state.Product.price *  this.state.quentityvalue} /=</h2>
                                <div className='form-group'>
                                    <label>Your Quantity</label> <br></br>
                                    <input type='text' placeholder='Enter your quantity' name='quantity' value={this.state.quentityvalue} onChange={this.quentityvalueHandler}/>
                                </div>

                                {this.state.message && (
                            <div className={this.state.success ?"alert alert-success" : "alert alert-danger"} role="alert">
                                {this.state.message}
                            </div>
                        )}
                                 
                                 <button className='btn btn-success mt-3 mb-3' onClick={this.addOrder}>Buy Now</button>

                             </div>
                        </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default BuyProductpage;


