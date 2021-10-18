import { Get_Request } from "../../actions/action_types";

export default (request = [], action) => {
    switch (action.type) {
        case Get_Request:    
            return action.payload;
        default:
            return request;
        
    }

};