import { REFERSH, Get_Request } from "../../actions/action_types";

export default (request = [], action) => {
    switch (action.type) {
        case Get_Request:
            return action.payload;
        case REFERSH:
            return [];
        default:
            return request;

    }

};