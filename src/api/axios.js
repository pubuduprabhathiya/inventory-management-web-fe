   
import axios from 'axios';

const BASE_API = "https://sep-uom-inventory.herokuapp.com/";

const instance = axios.create({
    baseURL: BASE_API
});

const token = localStorage.getItem('token');
if (token) instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default instance;