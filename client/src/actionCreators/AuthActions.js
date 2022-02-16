import {LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAILURE, SET_NEW_USER} from "../common/constants/ActionConstants"

// these are the new syntax of js (arrow function)

export const loginRequest = () => ({
    type: LOGIN_REQUEST
})

export const loginSuccess = (userDetails) => {
    return {
        type: LOGIN_SUCCESS,
        userDetails: userDetails
    }
}
// above demonstrated two types of arrow functions
export const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    err: err
})

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

export const logoutFailure = (err) => ({
    type: LOGOUT_FAILURE,
    err: err
})


export const setIsNewUser = (isNewUser) => ({
    type: SET_NEW_USER,
    isNewUser
})