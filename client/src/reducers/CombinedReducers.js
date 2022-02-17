import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { AlertReducer } from "./AlertReducer";
import { MyProfileReducer } from "./MyProfileReducer";

export default combineReducers({
   AuthReducer,
   AlertReducer,
   MyProfileReducer
}); // we will be splliting state into parts and this is the place we will be combining
