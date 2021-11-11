

import axios from './axios';
class TechnicalofficerService {


  async findIteamsByCatogary(category) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }; return await axios.get(`${url}/categories/${category.id}`, config);
  }


  async getBorrowData(store_code, fromDate, toDate) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }; return await axios.post(`${url}/borrowdata/`, { store_code, fromDate, toDate }, config);
  }

  async getCategories() {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.get(`${url}/categories`, config)
  };
  async getModels(category) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.get(`${url}/models/${category.id}`, config);
  }

  async getLabs() {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.get(`${url}/labs`, config);
  }


  async addEquipment(category, model, lab, imgPreview) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/addequipment/`, { category, model, lab, imgPreview }, config);
  }

  async getEquipmentByStoreCode(storecode) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.get(`${url}/equipment/${storecode}`, config);
  }

  async updateEquipment(store_code, status, imgPreview, issetimage) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/updateequipment/`, { store_code, status, imgPreview, issetimage }, config);
  }

  async getlastBorrowData(storecode) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.get(`${url}/borrowdata/${storecode}`, config);
  }

  async acceptEquipment(id, status) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/acceptEquipment/`, { id, status }, config);
  }

  async getRequestData(id) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.get(`${url}/requestdata/${id}`, config);
  }


  async normalIssueEquipment(userid, storeid, fromdate, todate, requestId) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/normalborrowing/`, { userid, storeid, fromdate, todate, requestId }, config);
  }

  async temporyIssueEquipment(userid, storeid, fromdate, todate, reason) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/temporyborrowing/`, { userid, storeid, fromdate, todate, reason }, config);
  }

  async getReport(fromdate, toDate, categories, reportType) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/report/`, { fromdate, toDate, categories, reportType }, config);
  }
  async addCategory(category) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/addcategory/`, { category }, config);
  }
  async addModel(model, category) {
    const url = 'technicalofficer';
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    return await axios.post(`${url}/addmodel/`, { model, category }, config);
  }
}
export default new TechnicalofficerService();
