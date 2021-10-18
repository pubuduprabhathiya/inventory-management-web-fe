import { Get_Labs } from "../../actions/action_types";

export default (labs = [], action) => {
    switch (action.type) {
        case Get_Labs:    
            return action.payload;
        default:
            return labs;
    }

};