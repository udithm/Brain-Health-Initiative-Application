import { combineReducers } from "redux";
import { authReducer } from "./AuthReducer";


export default combineReducers({
    auth: authReducer
}); // we will be splliting state into parts and this is the place we will be combining
