import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

const userLoginService = async(username, password) => {
    console.log("login d=Details => ", username + password);
    const response = await axios.post(API_URL +"signin", {username,password})
        if(response.data.username) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
}

const dashBoardLoginService = async(username, password) => {
    console.log("login d=Details => ", username + password);
    const response = await axios.post(API_URL +"signin/saleagent", {username,password})
        if(response.data.username) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
}

const CreateSalesAgents = async(salesAgents) => {
    return await axios.post(API_URL + "signup/saleagent" , salesAgents)
   
}

const getCurrentUser=() =>{
    return JSON.parse(localStorage.getItem("user"));
}

const getAgents=()=>{
    return axios.get(API_URL + "saleagent");
}

const getAgentsById=(id) =>{
    return axios.get(API_URL + 'saleagent'+ id );
}

const getUsersByusername=(username) => {
    return axios.get(API_URL + 'getusers/' + username);
}

const AuthService = {
    userLoginService,
    dashBoardLoginService,
    getCurrentUser,
    getAgents,
    getAgentsById,
    CreateSalesAgents,
    getUsersByusername
}




export default AuthService;