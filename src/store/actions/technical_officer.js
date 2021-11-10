import toDate from 'date-fns/toDate';
import * as api from '../../api/technical_officer_api';
import { Userid_error, Avalilability_Error, Model_Name_Error, Category_Name_Error, ERROR, Store_Id_Error, Get_Report, Get_Equipment_By_Category, Get_Borrow_Data, Get_Categories, Get_Models, Get_Labs, Add_Equipment, Get_Equipment, Get_Last_Borrow_Data, Get_Request } from './action_types';

export const findIteamsByCatogary = (category) => async (dispatch) => {

  console.log(category);
  try {
    const data = await api.findIteamsByCatogary(category);
    console.log(data, 'equ');
    dispatch({ type: Get_Equipment_By_Category, payload: data.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error.message);
  }

}
export const getBorrowData = (store_code, fromDate, toDate) => async (dispatch) => {
  console.log(store_code, fromDate, toDate, 'jj');
  try {
    const data = await api.getBorrowData(store_code, fromDate, toDate);
    console.log(data);
    dispatch({ type: Get_Borrow_Data, payload: data.data });
  }
  catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error.message);
  }
}

export const getCategories = () => async (dispatch) => {
  try {
    const data = await api.getCategories();
    console.log(data, 'cate');
    dispatch({ type: Get_Categories, payload: data.data });
  }
  catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error.message);
  }
}

export const getModels = (category) => async (dispatch) => {
  try {
    const data = await api.getModels(category);
    dispatch({ type: Get_Models, payload: data.data });
  }
  catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error.message);
  }
}
export const getLabs = () => async (dispatch) => {
  try {
    console.log('aaa');
    const data = await api.getLabs();
    console.log(data.data, 'ddd')
    dispatch({ type: Get_Labs, payload: data.data });
  }
  catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error.message);
  }
}
export const addEquipment = (category, model, lab, imgPreview) => async (dispatch) => {
  console.log(category, model, lab, imgPreview);
  try {
    const result = await api.addEquipment(category.id, model.id, lab.id, imgPreview);
    console.log(result);
    dispatch({ type: Add_Equipment, payload: result.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }

}

export const getEquipmentByStoreCode = (storecode) => async (dispatch) => {
  try {
    if (storecode !== '') {
      const data = await api.getEquipmentByStoreCode(storecode);
      console.log(data.data);
      if (data.data == null) {
        dispatch({ type: Store_Id_Error, payload: 'invalid' });
      }
      else {
        dispatch({ type: Store_Id_Error, payload: null });
      }
      dispatch({ type: Get_Equipment, payload: data.data });
    }
    else {

      dispatch({ type: Get_Equipment, payload: null });
    }

  } catch (error) {
    dispatch({ type: Store_Id_Error, payload: 'invalid' });
    console.log(error);

  }
}
export const updataEquipment = (store_code, status, imgPreview, issetimage) => async (dispatch) => {
  console.log(store_code, status, imgPreview, issetimage);
  try {
    const data = await api.updateEquipment(store_code, status, imgPreview, issetimage);
    window.location.reload();
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error);
  }
}
export const getlastBorrowData = (storeCode) => async (dispatch) => {
  try {
    const data = await api.getlastBorrowData(storeCode);
    if (data.data == null) {
      dispatch({ type: Store_Id_Error, payload: 'invalid' });
    }
    else {
      dispatch({ type: Store_Id_Error, payload: null });
    }
    console.log(data.data);
    dispatch({ type: Get_Last_Borrow_Data, payload: data.data });
  } catch (error) {
    dispatch({ type: Store_Id_Error, payload: 'invalid' });
    console.log(error);
  }
}
export const acceptEquipment = (id, status) => async (dispatch) => {
  try {
    const data = await api.acceptEquipment(id, status);
    window.location.reload();
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error.message);
  }
}
export const getRequestData = (id) => async (dispatch) => {
  try {
    const data = await api.getRequestData(id);
    console.log(data.data)
    if (data.data === null) {
      dispatch({ type: Avalilability_Error, payload: "NoRe" });
    }
    else if (data.data === "User Id Invaild") {
      dispatch({ type: Userid_error, payload: data.data });
    }
    else {
      dispatch({ type: Get_Request, payload: data.data });

    }
  } catch (error) {
    dispatch({ type: Avalilability_Error, payload: "NoRe" });
    console.log(error.message);
  }
}


export const temporyIssueEquipment = (userid, storeid, fromdate, t0date, reason) => async (dispatch) => {
  try {
    const data = await api.temporyIssueEquipment(userid, storeid, fromdate, t0date, reason);
    console.log(data);

    if (data.data.message === "Equipment is Unavailable") {
      dispatch({ type: Avalilability_Error, payload: data.data.message });
    }
    else if (data.data.message === "User id is invalid") {
      dispatch({ type: Userid_error, payload: data.data.message });
    }
    else {
      window.location.reload();
    }

  } catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error);
  }
}
export const NormalIssueEquipment = (userid, storeid, fromdate, t0date, requestId) => async (dispatch) => {
  try {
    const data = await api.normalIssueEquipment(userid, storeid, fromdate, t0date, requestId);
    window.location.reload();
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR, payload: error });
  }
}
export const getReport = (fromDate, toDate, categories, reportType) => async (dispatch) => {
  try {
    const data = await api.getReport(fromDate, toDate, categories, reportType);
    console.log(data.data);
    dispatch({ type: Get_Report, payload: data.data });

  } catch (error) {
    dispatch({ type: ERROR, payload: error });
    console.log(error);
  }
}
export const addCategory = (category) => async (dispatch) => {
  console.log(category);
  try {
    const result = await api.addCategory(category);
    console.log(result);
    dispatch({ type: Get_Categories, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: Category_Name_Error, payload: error });
  }

}
export const addModel = (model, category) => async (dispatch) => {
  console.log(model, category);
  try {
    const result = await api.addModel(model, category.id);
    console.log(result);
    dispatch({ type: Get_Models, payload: result.data });
  } catch (error) {
    console.log(error);

    dispatch({ type: Model_Name_Error, payload: error });
  }

}


