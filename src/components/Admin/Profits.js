import React, { Component } from 'react';

class Profits extends Component {
    render() {
        return (
            <div>
                <div className='text-center mt-2'>
                    <div className="card text-dark bg-light mb-3 shadow-sm bg-white rounded">
                    <div className="card-header"><h3>Profits</h3></div>
                        <div className="card-body">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-profits-business-kiranshastry-lineal-color-kiranshastry-1.png"/>
                            <h3 className="card-text"><b>$500</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profits;