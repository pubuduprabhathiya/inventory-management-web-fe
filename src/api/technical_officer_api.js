
import axios from 'axios';

const url = 'https://insep.herokuapp.com/technicalofficer';


export const findIteamsByCatogary = (category) => axios.get(`${url}/categories/${category.id}`);


export const getBorrowData = (store_code, fromDate, toDate) =>axios.post(`${url}/borrowdata/`,{store_code, fromDate, toDate});

export const getCategories = () => axios.get(`${url}/categories`)
export const getModels = (category) =>axios.get(`${url}/models/${category.id}`);

export const getLabs = () => axios.get(`${url}/labs`);


export const addEquipment = (category, model, lab,imgPreview) =>axios.post(`${url}/addequipment/`,{category, model, lab,imgPreview});

export const getEquipmentByStoreCode = (storecode) =>axios.get(`${url}/equipment/${storecode}`);

export const updateEquipment = (store_code, status,imgPreview,issetimage) =>axios.post(`${url}/updateequipment/`,{store_code, status,imgPreview,issetimage});

export const getlastBorrowData = (storecode) =>axios.get(`${url}/borrowdata/${storecode}`);

export const acceptEquipment = (id, status) =>axios.post(`${url}/acceptEquipment/`,{id, status});

export const getRequestData = (id) =>axios.get(`${url}//requestdata/${id}`);


export const normalIssueEquipment = (userid, storeid, fromdate, todate,requestId) =>axios.post(`${url}/normalborrowing/`,{userid, storeid, fromdate, todate,requestId});

export const temporyIssueEquipment = (userid, storeid, fromdate, todate,reason) =>axios.post(`${url}/temporyborrowing/`,{userid, storeid, fromdate, todate,reason});

export const getReport = (fromdate, toDate, categories,reportType) =>axios.post(`${url}/report/`,{fromdate, toDate, categories,reportType});
export const addCategory = (category) =>axios.post(`${url}/addcategory/`,{category});
export const addModel = (model,category) =>axios.post(`${url}/addmodel/`,{model , category});
