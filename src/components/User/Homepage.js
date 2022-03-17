import React from 'react';
import { Component } from 'react';
import NavBar from './NavBar';
import Controllservices from '../../services/controllSrevices';



class Homepage extends Component {
    constructor(props){
        super(props)

        this.state = {
            Product: []
        }
    };

    componentDidMount() {
        Controllservices.getAllProducts().then((res) =>{
            this.setState({
                Product: res.data
            });
        });
    }

    buyNow =(id) =>{
        // this.props.history.push("/buyproduct/ " + id);
        this.props.history.push("/buyproduct/" + id)
    }

    render() {
        return (
            <div>
                <NavBar/>
            <div className='container'>
                <div id="carouselExampleSlidesOnly" className="carousel slide mt-2" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://www.annfone.com/img/cms/mobiles-phones-banner.png" alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="" alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row mt-2'>
                    {this.state.Product.map( Product =>
                    
                    <div className='card m-2' key={Product.id} style={{width:"200px", display:"inline-block"}}>
                        <div className='card' style={{height:"100px", width:"100px"}}>
                            <img className='img-thumbnail' src={Product.imgurl} alt='card image cap'/>
                        </div>
                        <div className='card-body'>
                                <strong className='card-text'>{Product.productname}</strong><br/>
                                <p className='card-text'>Rs.{Product.price}</p>     
                        </div>

                        <div className='row'>
                        <button className='btn btn-info' onClick={ () => this.buyNow(Product.id)}>Buy</button>
                        </div>
                    </div>      
                    )}
                </div>
             </div>

            </div>
        );
    }
}

export default Homepage;