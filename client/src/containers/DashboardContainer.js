import React from "react";
import { useSelector } from "react-redux";

// import {userLogout} from "../services/AuthApi";
import {DashboardView} from "../views/DashboardView";
import ForgotPass from "../views/ForgotPass";

const DashboardContainer = () => {
    const authState = useSelector(state => state.AuthReducer);

    return (
        <>
            <DashboardView userName={authState.userName}
                name={authState.name}
                role={authState.role}
            />
        </>
    );
}
export default DashboardContainer;