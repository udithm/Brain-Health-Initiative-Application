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
import {
    loginSuccess
} from "../actionCreators/AuthActions"
import { alertError } from "../actionCreators/AlertActions";


export const myProfile = (uId, history) => {
    const id = uId;
    return (dispatch) => {
        dispatch(myProfileRequest());
        axios
            .post ("/myProfile", {id}) // /login/authentication part will be attached to base url
            .then ((res) => {
                console.log("-------this is then------- ", res);

                if (!res.data) { throw new Error("Profile fetch unsucessful.");} // this is added so mock server can be used(jugad)
                localStorage.setItem("userId", id);
                console.log("-------this is then222------- ", res.data);

                dispatch(myProfileSuccess(res.data));
                console.log("-------this is then33333333333333------- ", res);

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
