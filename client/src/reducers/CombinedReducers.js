import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { AlertReducer } from "./AlertReducer";
import { PatientReducer } from "./PatientReducer";
import { ConsultationReducer } from "./ConsultationReducer";
import { AnalyticsReducer } from "./AnalyticsReducer";
export default combineReducers({
   AuthReducer,
   AlertReducer,
   PatientReducer,
   ConsultationReducer,
   AnalyticsReducer,
}); // we will be splliting state into parts and this is the place we will be combining
