import { LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST, 
    LOGOUT_SUCCESS,
    CHANGE_PASSWORD_FAILURE, 
    CHANGE_PASSWORD_SUCCESS, 
    CHANGE_PASSWORD_REQUEST } from "../common/constants/ActionConstants"

const initialState = {
    userId: "",
    userName: "", // login username
    orgName:"",  // organisation name (hostpital name)
    name: "", // actual name
    role: "", // phc/secodary/teriary/admin
    userLoading: true, // true indiactes that user is not logged in yet becomes false at request 
    authError: "",// login error
    changePasswordLoading: true,
    changePasswordError: ""
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS : 
            return {
                ...state,
                userId: action.userDetails.userId,
                userName: action.userDetails.userName,
                orgName: action.userDetails.orgName,
                name: action.userDetails.name,
                role: action.userDetails.role,
                userLoading: false
            };
            // if the state values are coming from outside then we need to use action.userdetails.userid else if we are using the previous state value then we can use state.username
        case LOGIN_FAILURE:
            return {
                ...state, // this statement does the implimention of the below statement
                userId: state.userId, // this is example of using alredy existing state (this is not required only for demonstatrion of fetching values of from state)
                userLoading: false,
                authError: action.err 
            }
        
        case LOGIN_REQUEST:
            return {
                ...state,
                //authError: "",
                userLoading: false
            }
        
        case LOGOUT_REQUEST: // as of now we dont kave anything for thid case i.e, even if we comment this case program works the same
            return {
                ...state
            }
        
        case LOGOUT_SUCCESS:
            return {
                ...initialState
            }
        
        case LOGOUT_FAILURE:
            return {
                ...state,
                authError: action.err
            }
        case CHANGE_PASSWORD_REQUEST:
            return{
                ...state,
                changePasswordLoading: false
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state
            }
        case CHANGE_PASSWORD_FAILURE:
            return{
                ...state,
                changePasswordError: action.err
            }
        default:
            return state;
          
    }
}