import { Get_Equipment_By_Category } from "../../actions/action_types";

export default (equipments = [], action) => {
    switch (action.type) {
        case Get_Equipment_By_Category:
            return action.payload;
        default:
            return equipments;
    }
};