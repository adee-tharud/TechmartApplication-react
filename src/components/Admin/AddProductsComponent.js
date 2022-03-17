import React, { Component } from 'react';
import Controllservices from '../../services/controllSrevices';
import Navbarcomponent from './NavBarComponent';

class AddProductsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imgurl:"",
            productname:"",
            description:"",
            stocks:"",
            price:"",
            branches:["colombo"],
            success:false,
            message:"",
        }

        this.imageValueHandler = this.imageValueHandler.bind(this);
        this.productValueHandler = this.productValueHandler.bind(this);
        this.descriptionValueHandler = this.descriptionValueHandler.bind(this);
        this.stocksValueHandler = this.stocksValueHandler.bind(this);
        this.priceValueHandler = this.priceValueHandler.bind(this);
        this.branchValueHandler = this.branchValueHandler.bind(this);
    }

        imageValueHandler = (event) =>{this.setState({imgurl: event.target.value});}
        productValueHandler = (event) =>{this.setState({productname: event.target.value});}
        descriptionValueHandler = (event) =>{this.setState({description: event.target.value});}
        stocksValueHandler = (event) =>{this.setState({stocks: event.target.value});}
        priceValueHandler = (event) =>{this.setState({price: event.target.value});}
        branchValueHandler = (event) =>{this.setState({branches: event.target.value});}

        addOrUpdateProduct = (e) =>{
            e.preventDefault()
            let product ={
                imgurl: this.state.imgurl,
                productname: this.state.productname,
                description: this.state.description,
                stocks: this.state.stocks,
                price: this.state.price,
                branches: this.state.branches
            }

            Controllservices.addNewProduct(product).then((response)=>
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

        
    render() {
        return (
            <div>
                <Navbarcomponent/>
                <div className='container'>
                   <div className='card card col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded mt-3'>
                       <h1>Add new product</h1>
                       <img src={this.state.imgurl} alt="No image" className='img-thumbnail bg-light' style={{width:"300px", height:"300px"}}/>
                       <form>

                       <div className="form-group">
                            <label>Image Url:</label>
                            <input type="text"  placeholder="past your image link" name="imgurl" value={this.state.imgurl} onChange={this.imageValueHandler} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Product Name:</label>
                            <input type="text"  placeholder="Product name" name="productname" value={this.state.productname} onChange={this.productValueHandler} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text"  placeholder="Product description" name="description" value={this.state.description} onChange={this.descriptionValueHandler} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>stocks:</label>
                            <input type="text"  placeholder="Items" name="stocks" value={this.state.stocks} onChange={this.stocksValueHandler} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Price:</label>
                            <input type="text"  placeholder="Price" name="price" value={this.state.price} onChange={this.priceValueHandler} className="form-control"/>
                        </div>

                        {this.state.message && (
                            <div className={this.state.success ?"alert alert-success" : "alert alert-danger"} role="alert">
                                {this.state.message}
                            </div>
                        )}

                        <button className="btn btn-success mt-2" onClick={this.addOrUpdateProduct}>Save</button>
                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}

                       </form>
                    </div> 
                </div>
            </div>
        );
    }
}

export default AddProductsComponent;