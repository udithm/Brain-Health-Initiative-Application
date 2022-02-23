import { ALERT_CLEAR,
    ALERT_ERROR,
    ALERT_INFO,
    ALERT_SUCCESS, 
    ALERT_WARNING} from "../common/constants/ActionConstants";      

const intialState = {
        message: "",
        severity: "info",
        open: false,
       vertical: "bottom",
        horizontal: "right",
        backgroundColor: "",
        color: "#fff"
}
export const AlertReducer = (state = intialState, action) => {
    switch(action.type){
        case ALERT_SUCCESS:
            return {
                ...state,
                message: action.message,
                severity: "success",
                open: true,
                backgroundColor: "#2e7d32"
            };
        case ALERT_ERROR:
            return {
                ...state,
                message: action.message,
                severity: "error",
                open: true,
                backgroundColor: "#d32f2f" 
            };
        case ALERT_INFO:
            return {
                ...state,
                message: action.message,
                severity: "info",
                open: true,
                backgroundColor: "#0288d1"
            };
        case ALERT_WARNING:
            return {
                ...state,
                message: action.message,
                severity: "warining",
                open: true,
                backgroundColor: "#ed6c02"
            };
        case ALERT_CLEAR:
            return {
                ...state,
                message: "",
                severity: "info",
                open: false,
                backgroundColor: ""
            };
        default:
            return state;
    }
}