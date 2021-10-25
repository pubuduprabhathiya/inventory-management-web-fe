import { Get_Borrow_Data ,Get_Last_Borrow_Data} from "../../actions/action_types";

export default (borrowdata = [], action) => {
    switch (action.type) {
        case Get_Borrow_Data:    
            return action.payload;
        case Get_Last_Borrow_Data:
            return action.payload;
        default:
            return borrowdata;
        
    }

};