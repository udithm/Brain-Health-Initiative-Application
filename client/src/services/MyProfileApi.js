import axios from "../common/config/AxiosConfig";
// import {
//     loginRequest,
//     loginFailure,
//     loginSuccess
// } from "../actionCreators/AuthActions";
import {
    myProfileFailure,
    myProfileRequest,
    myProfileSuccess
} from "../actionCreators/MyProfileActions";

import { alertError } from "../actionCreators/AlertActions";


export const myProfile = (uId,history) => {
    return (dispatch) => {
        dispatch(myProfileRequest()); 
        axios
            .post ("/myProfile", {uId}) // /login/authentication part will be attached to base url
            .then ((res) => {
                if (!res.data || !res.data.users || !res.data.users.length) { throw new Error("Profile fetch unsucessful.");} // this is added so mock server can be used(jugad)
                dispatch(myProfileSuccess(res.data.users[0]));
                console.log("-------this is then------- ", res);
                localStorage.setItem("userId", res.data.users[0].userId);
                if (history) {
                    history.push("/myProfile");
                    // dispatch(alertSuccess("Profile fetch Successful!"));
                }
            })
            .catch((err)=>{
                dispatch(myProfileFailure(err.message));
                dispatch(alertError(err.message));
                console.log("-----this is catch------", err);
                
            })
    }

}