import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {useSelector} from "react-redux"
import {changePassword} from "../services/AuthApi";
import {ChangePasswordView} from "../views/ChangePasswordView";

const ChangePasswordContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const authState = useSelector(state => state.AuthReducer);
    const change = (newPassword) => changePassword(authState.userName,newPassword,history)(dispatch);
    return (
        <ChangePasswordView change ={change}
            err={authState.changePasswordError}></ChangePasswordView>
    )

}
export default ChangePasswordContainer