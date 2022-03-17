import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminComponent from "./components/Admin/AdminComponent";
import './App.css';
import EmployeeLoginComponent from './components/Logins/EmployeeLoginComponent';
import React from 'react';
import Managesalesagentscomponent from "./components/Admin/ManageSalesAgentsComponent";
import CreateSalesAgentsComponent from "./components/CreateSalesAgentsComponent"; 
import ManageProducts from "./components/Admin/ManageProducts";
import AddProductsComponent from "./components/Admin/AddProductsComponent";
import UserLoginComponent from "./components/Logins/UserLoginComponent";
import Homepage from "./components/User/Homepage";
import BuyProductpage from "./components/User/BuyProductpage";
import MyOders from "./components/User/MyOders";
import Profile from "./components/User/Profile";
import ManageOrders from "./components/Admin/ManageOrders";
import UserRegister from "./components/User/UserRegister";
import Supplier from "./components/Supplier/Supplier";
import Delivery from "./components/Delivery/Delivery";






// const App = ()=> {
//   return (
//     <div>
//       {/* <EmployeeLoginComponent/> */}
//       <div>
//        <Routes>
//             <Route  path={"/"} element={<AdminComponent />} />
//             <Route  path={"/admin"} element={<AdminComponent />} />
//             <Route  path={"/login"} element={<EmployeeLoginComponent />} />
//        </Routes>
//       </div>
      
//     </div>
//   );
// }
const App= ()=>{
  return(
    <div>

      {/* <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<UserLoginComponent/>}/>
        <Route exact path={"/managesalesagentscomponent"} element={<Managesalesagentscomponent/>}/>
        <Route exact path={"/admincomponent"} element={<AdminComponent/>}/>
        <Route exact path={"/manageproduct"} element={<ManageProducts/>}/>
        <Route exact path={"/homepage"} element={<Homepage/>}/>


        <Route path={"/managesalesagentscomponent/_add"} element={<CreateSalesAgentsComponent/>}/>
        <Route path={"/buyproduct/:id"} element={<BuyProductpage/>}/>
        <Route path={"/manageproduct/_add"} element={<AddProductsComponent/>}/>
        <Route path="/admin" element={<AdminComponent/>}/>
        <Route path="/login" element={<EmployeeLoginComponent/>}/>
        <Route path="/userhome" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter> */}

      <Router>
        <Switch>
          <Route path='/' exact component= {UserLoginComponent}></Route>
          <Route path='/login' component= {EmployeeLoginComponent}></Route>
          <Route path='/admin' exact component= {AdminComponent}></Route>
          <Route path='/userhome' exact component = {Homepage}></Route>
          <Route path='/buyproduct/:id' component={BuyProductpage}></Route>
          <Route path='/manageproduct' component={ManageProducts}></Route>
          <Route path='/managesalesagentscomponent/_add' component={CreateSalesAgentsComponent}></Route>
          <Route path='/managesalesagentscomponent' component={Managesalesagentscomponent}></Route>
          <Route path='/addproduct' component={AddProductsComponent}></Route>
          <Route path='/myOders' component={MyOders}></Route>
          <Route path='/myProfile' component={Profile}></Route>
          <Route path='/manageOders' component={ManageOrders}></Route>
          <Route path='/userRegister' component={UserRegister}></Route>
          <Route path='/supplier' component= {Supplier}></Route>
          <Route path='/delivery' component={Delivery}></Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
