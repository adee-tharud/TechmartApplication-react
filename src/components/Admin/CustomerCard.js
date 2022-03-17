import React, { Component } from 'react';

class CustomerCard extends Component {
    render() {
        return (
            <div>
                <div className='text-center mt-2'>
                    <div className="card text-dark bg-light mb-3 shadow-sm bg-light rounded">
                    <div className="card-header"><h3>Customers</h3></div>
                        <div className="card-body">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-customers-business-and-management-kiranshastry-lineal-color-kiranshastry-2.png"/>
                            <h3 className="card-text"><b>130</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerCard;