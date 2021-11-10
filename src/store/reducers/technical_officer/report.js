import { REFERSH,Get_Report } from "../../actions/action_types";

export default (report = [], action) => {
    switch (action.type) {
        case Get_Report:    
            return action.payload;
        case REFERSH:
            return [];
        default:
            return report;
    }

};