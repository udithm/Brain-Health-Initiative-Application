import { LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST, 
    LOGOUT_SUCCESS,
    CHANGE_PASSWORD_FAILURE, 
    CHANGE_PASSWORD_SUCCESS, 
    CHANGE_PASSWORD_REQUEST, 
    MY_PROFILE_FAILURE,
    MY_PROFILE_REQUEST,
    MY_PROFILE_SUCCESS} from "../common/constants/ActionConstants"

const initialState = {
    userId: "",
    doctorId: "",
    userName: "", // login username
    orgName:"",  // organisation name (hostpital name)
    name: "", // actual name
    role: "", // phc/secodary/teriary/admin
    userLoading: true, // true indiactes that user is not logged in yet becomes false at request 
    authError: "",// login error
    changePasswordLoading: true,
    changePasswordError: "",
    myProfileError: "",// login error
    myProfileLoading: true,
    Hospital: {
        id: "",
        name: "",
        city: "",
        state: "",
        district: "",
        type: "",
        email: "",
        pincode: "",
        contactNumber: ""
    },
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS : 
            return {
                ...state,
                userId: action.userDetails.id,
                userName: action.userDetails.email,
                orgName: action.userDetails.orgName,
                name: action.userDetails.username,
                role: action.userDetails.roles[0],
                userLoading: false,
                Hospital: action.userDetails.Hospital
            };
            // if the state values are coming from outside then we need to use action.userdetails.userid else if we are using the previous state value then we can use state.username
        case LOGIN_FAILURE:
            return {
                ...state, // this statement does the implimention of the below statement
            //    userId: state.userId, // this is example of using alredy existing state (this is not required only for demonstatrion of fetching values of from state)
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
        case MY_PROFILE_FAILURE:
            return {
                ...state,
                myProfileLoading: false,
                myProfileError: action.err
            };
        case MY_PROFILE_REQUEST:
            return {
                ...state,
                myProfileLoading:false
            };
        case MY_PROFILE_SUCCESS:
            console.log("^^^^^^^^^^^^^^^^^");
            const uId = localStorage.getItem("userId");

            return {
              ...state,
              userId: uId,
              doctorId: action.userDetails.doctorId,
              userName: action.userDetails.email,
              orgName: action.userDetails.orgName,
              name: action.userDetails.userName,
              role: action.userDetails.role,
              myProfileLoading: false,
              Hospital: action.userDetails.Hospital,
            };
        default:
            return state;
          
    }
}