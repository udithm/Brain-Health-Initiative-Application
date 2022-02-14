import React from "react";
import { useSelector } from "react-redux";
import {DashboardView} from "../views/DashboardView";

const DashboardContainer = () => {
    const authState = useSelector(state => state.AuthReducer);
    return (
    <DashboardView userName={authState.userName}
        userId={authState.userId}
        orgName={authState.orgName}
        name={authState.name}
        role={authState.role}
        />);
}
export default DashboardContainer;