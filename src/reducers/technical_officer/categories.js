import { Get_Categories } from "../../actions/action_types";

export default (categories = [], action) => {
    switch (action.type) {
        case Get_Categories:    
            return action.payload;
        default:
            return categories;
    }

};