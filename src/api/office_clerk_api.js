import {deleteRequest,getRequest,postRequest,putRequest} from "./util";

class OfficeClerkService {
  getNewDamages() {
    return getRequest("users/office-clerk/get-new-damage-item");
  }

  getPendingDamages() {
    return getRequest("users/office-clerk/get-under-repair-item");
  }

  getOldDamages() {
    return getRequest("users/office-clerk/get-old-damage-item");
  }

  markAsSendToR(id) {
    return putRequest(`users/office-clerk/send-to-repair/${id}`);
    
  }

  markAsFinishedR(id) {
    return putRequest(`users/office-clerk/finish-repair/${id}`);
    
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

