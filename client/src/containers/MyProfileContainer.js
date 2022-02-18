import React from "react";
import { useSelector } from "react-redux";

import {MyProfileView} from "../views/MyProfileView";

const MyProfileContainer = () => {
    const myProfileState = useSelector(state => state.MyProfileReducer);
    return (
    <MyProfileView userName={myProfileState.userName}
        userId={myProfileState.userId}
        orgName={myProfileState.orgName}
        name={myProfileState.name}
        role={myProfileState.role}
        />);
}
export default MyProfileContainer;