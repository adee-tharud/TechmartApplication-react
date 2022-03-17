import axios from "axios";

const BASE_API ="http://localhost:8080/api/test/";

const getAllProducts =() =>{
    return axios.get(BASE_API + 'products');
}

const addNewProduct = async (product) =>{
    console.log("product Deatails => :", product);
    return await axios.post(BASE_API + 'add-product', product)
}

const findProductById=(id) =>{
    return axios.get(BASE_API + 'product/'+ id );
}

const addNewOrder = async (order) => {
    console.log("orderDetails=> :", order);
    return await axios.post(BASE_API + 'buy-now', order);
}

const getAllOrders =() => {
    return axios.get(BASE_API + 'orders');
}

const getOrdersDoneByUser=(id) => {
    return axios.get(BASE_API + 'userorders/'+ id)
}

const getAllDelivery =() =>{
    return axios.get(BASE_API + 'delivery');
}

const Controllservices ={
    getAllProducts,
    addNewProduct,
    findProductById,
    addNewOrder,
    getOrdersDoneByUser,
    getAllOrders,
    getAllDelivery
}



export default Controllservices;