import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { AlertReducer } from "./AlertReducer";
import { PatientReducer } from "./PatientReducer";
import { ConsultationReducer } from "./ConsultationReducer";

export default combineReducers({
   AuthReducer,
   AlertReducer,
   PatientReducer,
   ConsultationReducer,
}); // we will be splliting state into parts and this is the place we will be combining
