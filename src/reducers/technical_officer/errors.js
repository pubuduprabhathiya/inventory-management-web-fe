
import { Store_Id_Error } from "../../actions/action_types";

export default (error = {}, action) => {
    switch (action.type) {
        case Store_Id_Error:    
            return { storeid:action.payload };
        default:
            return error;
    }


};