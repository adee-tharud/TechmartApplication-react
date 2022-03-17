import React from "react";

const NavBar =() => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand p-3" href="#">Tech Mart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                   <a className="nav-item nav-link active" href="/userhome">Home</a>

                   <a className="nav-item nav-link active" href="/myOders">My Orders</a>

                   <a className="nav-item nav-link active" href="/myProfile">My Profile</a>

                    {/* <li className="nav-item">
                    <Link to={""} className="nav-link">
                        My Oders
                    </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to={""} className="nav-link">
                        My Profile
                        </Link>
                    </li> */}
                    <button className="logoutUser btn btn-danger">Logout</button>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default NavBar;