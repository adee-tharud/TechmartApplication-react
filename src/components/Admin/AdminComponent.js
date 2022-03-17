import React from "react";
import CustomerCard from "./CustomerCard";
import Navbarcomponent from "./NavBarComponent";
import Profits from "./Profits";
import TotalSales from "./TotalSales";
import AuthService from "../../services/Auth.service";

const AdminComponent= () => {
    return(
        <div>
          <Navbarcomponent/>
           <div className="container-fluid">
              <div className="row">
               <div className="col align-item-center">
                <div className="adm-card card mt-5 shadow-sm bg-white rounded">
                    <div className="card-body text-center">
                        <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/120/000000/external-admin-programming-phatplus-lineal-color-phatplus.png"/>
                            <h3 className="card-title"><b>Welcome</b></h3>
                            <h5 className="card-title"><b>to Admin Dashboard</b></h5>
                            <p className="card-text">{AuthService.getCurrentUser().username}</p>
                            <p className="card-text">{AuthService.getCurrentUser().roles}</p>
                            <p className="card-text">{AuthService.getCurrentUser().branch}</p>
                            <p className="card-text">{AuthService.getCurrentUser().email}</p>

                        </div>
                    </div>
               </div>

               <div className="col">
                    <div className="all-cards mt-5">
                        <div className="row">
                            <div className="col">
                                <div className="tot-card col-sm">
                                    <TotalSales/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="prof-card col-sm">
                                    <Profits/>
                                </div>
                            </div>
                        </div>
                        <div className="cust-card col-sm">
                            <CustomerCard/>
                        </div>
                   </div>
               
               </div>
               </div>
           </div>
        </div>
    );
}

export default AdminComponent;