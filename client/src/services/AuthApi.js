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
                if (!res.data || !res.data.users || !res.data.users.length) { throw new Error("User not found");} // this is added so mock server can be used(jugad)
                dispatch(loginSuccess(res.data.users[0]));
                console.log("-------this is then------- ", res);
                history.push(`/dashboard/${res.data.users[0].userId} `); // discards existing route completly and adds the "/dashboard" after localhost:3000
            })
            .catch((err)=>{
                dispatch(loginFailure(err.message));
                console.log("-----this is catch------", err);
                
            })
 
    }
      

}
