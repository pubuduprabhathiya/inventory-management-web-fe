import { Get_Models } from "../../actions/action_types";

export default (models = [], action) => {
    switch (action.type) {
        case Get_Models:    
            return action.payload;
        default:
            return models;
    }

};