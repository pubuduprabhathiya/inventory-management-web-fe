import { REFERSH, Add_Equipment, Get_Equipment } from "../../actions/action_types";

export default (equipment=null, action) => {
    switch (action.type) {
        case Add_Equipment:    
            return action.payload;
        case Get_Equipment:
            return action.payload;
        case REFERSH:
            return null;
        default:
            return equipment;
    }

};