import React from "react";
import { Link } from "react-router-dom";


const Navbarcomponent= () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand p-3" href="#">Admin Dashboard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                <a className="nav-item nav-link active" href="/admin">Home</a>

                <a className="nav-item nav-link active" href="managesalesagentscomponent">Manage SaleAgent</a>
                    <li className="nav-item" >
                        <Link to={"/manageproduct"} className="nav-link">
                        Manage Inventory
                        </Link>
                        </li>
                    <a className="nav-item nav-link" href="/manageOders">Manage Oders</a>
                    <a className="nav-item nav-link" href="#">Manage Branches</a>
                    <a className="nav-item nav-link" href="/delivery">Delivaries</a>
                    <button className="logout btn btn-danger">Logout</button>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Navbarcomponent;