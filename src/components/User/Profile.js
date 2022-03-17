import React, { Component } from 'react';
import AuthService from '../../services/Auth.service';
import NavBar from './NavBar';

class Profile extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <div className='container'>
                    <h2 className='title'>User Profile</h2>

                    <div className='card'>
                      <h2 className='card-header'>{AuthService.getCurrentUser().username}</h2>
                      <p>{AuthService.getCurrentUser().email}</p>
                      <p>{AuthService.getCurrentUser().address}</p>
                      <p>{AuthService.getCurrentUser().phonenumber}</p>
                   </div>

                </div>
            </div>
        );
    }
}

export default Profile;