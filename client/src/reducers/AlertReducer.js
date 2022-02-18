import { ALERT_CLEAR,
    ALERT_ERROR,
    ALERT_INFO,
    ALERT_SUCCESS, 
    ALERT_WARNING} from "../common/constants/ActionConstants";      

const intialState = {
        message: "",
        severity: "info",
        open: false,
       vertical: "top",
        horizontal: "right"
}
export const AlertReducer = (state = intialState, action) => {
    switch(action.type){
        case ALERT_SUCCESS:
            return {
                ...state,
                message: action.message,
                severity: "success",
                open: true
            };
        case ALERT_ERROR:
            return {
                ...state,
                message: action.message,
                severity: "error",
                open: true
            };
        case ALERT_INFO:
            return {
                ...state,
                message: action.message,
                severity: "info",
                open: true
            };
        case ALERT_WARNING:
            return {
                ...state,
                message: action.message,
                severity: "warining",
                open: true
            };
        case ALERT_CLEAR:
            return {
                ...state,
                message: "",
                severity: "info",
                open: false
            };
        default:
            return state;
    }
}