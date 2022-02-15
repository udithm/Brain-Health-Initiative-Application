import { CHANGE_PASSWORD_FAILURE,CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_REQUEST } from "../common/constants/ActionConstants";

export const changePasswordRequest = () => ({
    type: CHANGE_PASSWORD_REQUEST
})

export const changePasswordSuccess = () => ({
    type: CHANGE_PASSWORD_SUCCESS
})

export const changePasswordFailure = (err) => ({
    type: CHANGE_PASSWORD_FAILURE,
    err: err
})