import React from "react";
import {LoginView} from "../views/LoginView";
import { useDispatch } from "react-redux";
import {userLogin} from "../services/AuthApi";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux"
const LoginContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const authState = useSelector(state => state.AuthReducer);
    const login = (username, password) => userLogin(username, password,history)(dispatch);
  return (

    <LoginView login={login}
        err={authState.authError}/>
  )
}

export default LoginContainer
