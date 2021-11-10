import { REFERSH, Get_Borrow_Data ,Get_Last_Borrow_Data} from "../../actions/action_types";

export default (borrowdata = [], action) => {
    switch (action.type) {
        case Get_Borrow_Data:    
            return action.payload;
        case Get_Last_Borrow_Data:
            return action.payload;
        case REFERSH:
            return [];
        default:
            return borrowdata;
        
    }

};