import React from "react";
import {LoginView} from "../views/LoginView";
import { useDispatch } from "react-redux";
import {userLogin} from "../services/AuthApi";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const login = (username, password) => userLogin(username, password)(dispatch);
  return (

    <LoginView login={login}/>
  )
}

export default LoginContainer
