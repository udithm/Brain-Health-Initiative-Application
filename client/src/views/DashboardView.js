import React from "react";

//import Button from '@material-ui/core/Button';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { NavBar } from "../components/NavBar";

export const DashboardView = ({name}) =>{
    const textstyle = {margin: "25px"};
    // const backStyle = {backgroundColor: "#1976d2"}
    return (
        <>
        <NavBar></NavBar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={textstyle} >
                <h2>Welcome to Brain Health Initiative Program {name}!!!, This is dashboard </h2>
        </Typography>
        
        </>
    );
};