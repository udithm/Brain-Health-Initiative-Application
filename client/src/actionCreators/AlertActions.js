import { ALERT_CLEAR, ALERT_ERROR, ALERT_INFO, ALERT_SUCCESS, ALERT_WARNING } from "../common/constants/ActionConstants";


export const alertSuccess = (message) => ({
    type: ALERT_SUCCESS,
    message:message
})

export const alertError = (message) => ({
    type: ALERT_ERROR,
    message: message
})

export const alertInfo = (message) => ({
    type: ALERT_INFO,
    message: message
})

export const alertWarning = (message) => ({
    type: ALERT_WARNING,
    message: message
})

export const alertClear = () => ({
    type: ALERT_CLEAR
})