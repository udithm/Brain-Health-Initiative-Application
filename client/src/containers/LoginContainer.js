import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux"
import {userLogin} from "../services/AuthApi";
import {LoginView} from "../views/LoginView";
import { SignupView } from "../views/SignupView";
import { setIsNewUser } from "../actionCreators/AuthActions";


const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const authState = useSelector(state => state.AuthReducer);
    const login = (userName, password) => userLogin(userName, password,history)(dispatch);
    const signUp = (isNewUser) => dispatch(setIsNewUser(isNewUser));
  return (
    authState.isNewUser ? 
    <SignupView></SignupView> :
    <LoginView login={login} signUp={signUp}
        err={authState.authError}/>
  )
}

export default LoginContainer
