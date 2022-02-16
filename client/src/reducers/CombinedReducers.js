import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { AlertReducer } from "./AlertReducer";


export default combineReducers({
   AuthReducer,
   AlertReducer
}); // we will be splliting state into parts and this is the place we will be combining
