import {postRequestWithHeader, getRequestWithHeaders, putRequestWithHeader } from "./util";

class OfficeClerkService {
  getNewDamages() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    };
    return getRequestWithHeaders("users/office-clerk/get-new-damage-item",config);
  }

  getPendingDamages() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    };
    return getRequestWithHeaders("users/office-clerk/get-under-repair-item",config);
  }

  getOldDamages() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    };
    return getRequestWithHeaders("users/office-clerk/get-old-damage-item",config);
  }

  markAsSendToR(id) {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    };
    return putRequestWithHeader(`users/office-clerk/send-to-repair/${id}`,config);
    
  }

  markAsFinishedR(id,itemId) {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    };
    console.log(`users/office-clerk/finish-repair/${id}/${itemId}`);
    return putRequestWithHeader(`users/office-clerk/finish-repair/${id}/${itemId}`,config);    
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

 

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new OfficeClerkService();

