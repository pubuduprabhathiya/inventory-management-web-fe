import { Get_Report } from "../../actions/action_types";

export default (report = [], action) => {
    switch (action.type) {
        case Get_Report:    
            return action.payload;
        default:
            return report;
    }

};