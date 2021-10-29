
import {Avalilability_Error,Userid_error,Model_Name_Error, Store_Id_Error ,ERROR,Category_Name_Error} from "../../actions/action_types";
import { Store_Id_Error } from "../../actions/action_types";

export default (error = {}, action) => {
    switch (action.type) {
        case Store_Id_Error:    
            return { storeid: action.payload };
        case ERROR:
            return { error: action.payload };
        case Category_Name_Error:    
            return { category: action.payload };
         case Model_Name_Error:    
            return { model: action.payload };
         case Userid_error:
            return { Userid: action.payload };
        case Avalilability_Error:    
            return { available: action.payload };
        default:
            return error;
    }

};