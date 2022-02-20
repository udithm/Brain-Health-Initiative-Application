import React from "react";
import Typography from '@mui/material/Typography';
import { NavBar } from "../components/NavBar";

export const MyProfileView = ({userName,userId,orgName,name,role}) =>{
    const textstyle = {margin: "25px"};
    // const backStyle = {backgroundColor: "#1976d2"}
    return (
        <>
        <NavBar></NavBar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={textstyle} >
                <h2>Welcome to Brain Health Initiative Program, {name} !!! </h2>
                
            <div><b>User Details:</b></div>
                Name: {name}<br/>
            UserId: {userId}
            <br/>
            Username: {userName}
            <br></br>
            Organisation: {orgName}
            <br></br>
            Role: {role}
            <br></br>

        </Typography>
 
        </>
    );
};