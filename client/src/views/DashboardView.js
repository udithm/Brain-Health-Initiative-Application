import React from "react";
import { useSelector } from "react-redux";
export const DashboardView = ({userName,userId,orgName,name,role}) =>{
    return (
        <>
        <h1> hi login is success !!</h1>
        <p>
            your user id is {userId}
            <br/>
            your userName id is {userName}
            <br></br>
            your organisation is {orgName}
            <br></br>
            your role is {role}
            <br></br>
            Your full name is {name}
        </p>
        </>
    );
};