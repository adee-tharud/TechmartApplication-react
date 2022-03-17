import React, { Component } from 'react';

class TotalSales extends Component {
    render() {
        return (
            <div>
                <div className='text-center mt-2'>
                    <div className="card text-dark bg-light mb-3 shadow-sm bg-white rounded">
                    <div className="card-header"><h3>Total Sales</h3></div>
                        <div className="card-body">
                        <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/50/000000/external-sales-automotive-dealership-flaticons-flat-flat-icons.png"/>
                            <h3 className="card-text"><b>150</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TotalSales;