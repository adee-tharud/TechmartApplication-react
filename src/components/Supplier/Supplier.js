import React, { Component } from 'react';

class Supplier extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" style={{paddingLeft:"30px"}} href="#"><b>Supplier</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul  className="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container'>
                <div className="row">
                     <table className="table table-striped table-bordered mt-3">
                         
                         <thead>
                             <tr>
                                 <th>Agent Name</th>
                                 <th>Branch</th>
                                 <th>Product</th>
                                 <th>Quentity</th>

                             </tr>
                         </thead>

                         <tbody>
                            
                                    <tr>
                                        <td>vihanga</td>
                                        <td>Kurunegala</td>
                                        <td>Xiaomi Note 9</td>
                                        <td>10</td>
                                        <td>
                                            <button className="btn btn-info btn-sm">Accept</button>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>saman</td>
                                        <td>gampaha</td>
                                        <td>Bluetooth Handfree</td>
                                        <td>8</td>
                                        <td>
                                            <button className="btn btn-info btn-sm">Accept</button>
                                        </td>

                                    </tr>
                                
                         </tbody>
                         
                     </table>
                  </div>
                  </div>
            </div>
        );
    }
}

export default Supplier;