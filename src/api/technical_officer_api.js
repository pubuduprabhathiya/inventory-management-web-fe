

import axios from './axios';

const url = 'technicalofficer';
const config = {
    headers:{
        Authorization: "Bearer "+localStorage.getItem('token')
    }
  };

export const findIteamsByCatogary = (category) => axios.get(`${url}/categories/${category.id}`,config);


export const getBorrowData = (store_code, fromDate, toDate) =>axios.post(`${url}/borrowdata/`,{store_code, fromDate, toDate},config);

export const getCategories = () => axios.get(`${url}/categories`,config)
export const getModels = (category) =>axios.get(`${url}/models/${category.id}`,config);

export const getLabs = () => axios.get(`${url}/labs`,config);


export const addEquipment = (category, model, lab,imgPreview) =>axios.post(`${url}/addequipment/`,{category, model, lab,imgPreview},config);

export const getEquipmentByStoreCode = (storecode) =>axios.get(`${url}/equipment/${storecode}`,config);

export const updateEquipment = (store_code, status,imgPreview,issetimage) =>axios.post(`${url}/updateequipment/`,{store_code, status,imgPreview,issetimage},config);

export const getlastBorrowData = (storecode) =>axios.get(`${url}/borrowdata/${storecode}`,config);

export const acceptEquipment = (id, status) =>axios.post(`${url}/acceptEquipment/`,{id, status},config);

export const getRequestData = (id) =>axios.get(`${url}//requestdata/${id}`,config);


export const normalIssueEquipment = (userid, storeid, fromdate, todate,requestId) =>axios.post(`${url}/normalborrowing/`,{userid, storeid, fromdate, todate,requestId},config);

export const temporyIssueEquipment = (userid, storeid, fromdate, todate,reason) =>axios.post(`${url}/temporyborrowing/`,{userid, storeid, fromdate, todate,reason},config);

export const getReport = (fromdate, toDate, categories,reportType) =>axios.post(`${url}/report/`,{fromdate, toDate, categories,reportType},config);
export const addCategory = (category) =>axios.post(`${url}/addcategory/`,{category},config);
export const addModel = (model,category) =>axios.post(`${url}/addmodel/`,{model , category},config);
