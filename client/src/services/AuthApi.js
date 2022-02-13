import axios from "../common/config/AxiosConfig";
import {
    loginRequest,
    loginFailure,
    loginSuccess
} from "../actionCreators/AuthActions";

export const userLogin = (userName, password, history) => {
    //concept used below is call back. there we are sending a function as a parameter to parent function
    return (dispatch) => {
        dispatch(loginRequest()); 
        axios
            .post ("/login/authentication", {userName,password}) // this parameter part will be attached to base url
            .then ((res) => {
                dispatch(loginSuccess(res));
                console.log("-------this is then------- ");
            })
            .catch((err)=>{
                dispatch(loginFailure(err));
                console.log("-----this is catch------", err);
            })
 
    }
      

}
