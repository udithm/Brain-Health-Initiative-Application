import { MY_PROFILE_FAILURE, 
    MY_PROFILE_REQUEST, 
    MY_PROFILE_SUCCESS
 } from "../common/constants/ActionConstants";  


 export const myProfileRequest = () => ({
    type: MY_PROFILE_REQUEST
})

export const myProfileSuccess = (userDetails) => {
    return {
        type: MY_PROFILE_SUCCESS,
        userDetails: userDetails
    }
}
// above demonstrated two types of arrow functions
export const myProfileFailure = (err) => ({
    type: MY_PROFILE_FAILURE,
    err: err
})