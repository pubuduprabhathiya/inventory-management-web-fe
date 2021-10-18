import { Add_Equipment, Get_Equipment } from "../../actions/action_types";

export default (equipment=null, action) => {
    switch (action.type) {
        case Add_Equipment:    
            return action.payload;
        case Get_Equipment:
            return action.payload;
        default:
            return equipment;
    }

};