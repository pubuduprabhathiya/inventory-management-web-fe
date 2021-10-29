import { postRequest } from "./util";

const URL = "/auth/";

export const login = (data) => postRequest(`${URL}`, data);