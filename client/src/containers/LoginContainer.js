import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux"
import {userLogin} from "../services/AuthApi";
import {LoginView} from "../views/LoginView";
// import { SignupView } from "../views/AddDoctorView";


const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const authState = useSelector(state => state.AuthReducer);
    const login = (userName, password) => userLogin(userName, password,history)(dispatch);
  return (
    // authState.isNewUser ? 
    // <SignupView></SignupView> :
    <LoginView login={login}
        err={authState.authError}/>
  )
}

export default LoginContainer
