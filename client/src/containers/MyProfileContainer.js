import React from "react";
import { useSelector } from "react-redux";

import {MyProfileView} from "../views/MyProfileView";

const MyProfileContainer = () => {
    const authState = useSelector(state => state.AuthReducer);
    return (
    <MyProfileView userName={authState.userName}
        userId={authState.userId}
        orgName={authState.orgName}
        name={authState.name}
        role={authState.role}
        Hospital = {authState.Hospital}
        />);
}
export default MyProfileContainer;