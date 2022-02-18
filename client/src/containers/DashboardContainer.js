import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import {userLogout} from "../services/AuthApi";
import {DashboardView} from "../views/DashboardView";

const DashboardContainer = () => {
    const authState = useSelector(state => state.AuthReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const logout = (userName) => userLogout(userName,history)(dispatch);
    return (
        <>
    <DashboardView userName={authState.userName}
        name={authState.name}
        />)
        </>
    );
}
export default DashboardContainer;