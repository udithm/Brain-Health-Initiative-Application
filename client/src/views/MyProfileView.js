import React from "react";
import Typography from '@mui/material/Typography';
import { NavBar } from "../components/NavBar";

export const MyProfileView = ({ userName, userId, orgName, name, role, Hospital }) => {
    const textstyle = { margin: "25px" };
    const abc = "User" + userId
    // const backStyle = {backgroundColor: "#1976d2"}
    return (
        <>
            <NavBar></NavBar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={textstyle} >
                <h2>Welcome to Brain Health Initiative Program, {name} !!! </h2>

                <div><b>User Details:</b></div>
                Name:{name} <br />
                UserId: {userId}
                <br />
                email: {userName}
                <br></br>
                Role: {role}
                <br></br>
                <br></br>
                <b>Hospital Details:</b>
                <br></br>
                Hospital id: {Hospital.id}
                <br></br>
                Hospital name: {Hospital.name}
                <br></br>
                Hospital type: {Hospital.type}
                <br></br>
                Hospital state: {Hospital.state}
                <br></br>
                Hospital district: {Hospital.district}
                <br></br>
                Hospital city: {Hospital.city}
                <br></br>
                Hospital pincode: {Hospital.pincode}
                <br></br>
                Hospital contactNumber: {Hospital.contactNumber}
                <br></br>
            </Typography>

        </>
    );
};