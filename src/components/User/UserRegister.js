import React, { Component } from 'react';

class UserRegister extends Component {
    render() {
        return (
            <div>
                                <div className="container">
                    <div className="row">
                        <div className="card mt-3 col-md-6 offset-md-3 offset-md-3 shadow p-3 mb-5 bg-white rounded">
                            {/* {
                                this.renderTitle()
                            } */}
                            <div className="card-body">
                                <form>
                                    <h2 className="text-center" style={{fontFamily:"fantasy"}}>Customer Registration Form</h2>
                                    <div className="form-group">
                                        <label>Customer Name:</label>
                                        <input placeholder="User Name" name="username"  className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="Email Address" name="email"  className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Gender:</label>
                                        <input placeholder="Gender" name="gender"  className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input placeholder="Address" name="address"  className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Phone No:</label>
                                        <input placeholder="Phone number" name="phonenumber"  className="form-control"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input placeholder="Enter Password" name="password"  className="form-control"/>
                                    </div>


                                    <button className="btn btn-success mt-2" >Save</button>
                                    <button className="btn btn-danger mt-2" style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserRegister;