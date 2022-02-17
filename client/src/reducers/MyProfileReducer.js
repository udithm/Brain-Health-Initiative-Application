import { MY_PROFILE_FAILURE,
    MY_PROFILE_REQUEST,
    MY_PROFILE_SUCCESS
} from "../common/constants/ActionConstants";  

const initialState = {
    userId: "",
    userName: "", // login username
    orgName:"",  // organisation name (hostpital name)
    name: "", // actual name
    role: "", // phc/secodary/teriary/admin
    myProfileError: "",// login error
    myProfileLoading: true,
}

export const MyProfileReducer = (state = initialState, action) => {
    switch (action.type){
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
            return {
                ...state,
                userId: action.userDetails.userId,
                userName: action.userDetails.userName,
                orgName: action.userDetails.orgName,
                name: action.userDetails.name,
                role: action.userDetails.role,
                myProfileLoading: false,
            };
        default:
            return state;

    }
}