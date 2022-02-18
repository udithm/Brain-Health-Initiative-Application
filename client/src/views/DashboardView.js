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
        {/* <Box sx={{ flexGrow: 1 }}  >
        <AppBar position="static" >
            <Toolbar>
            { <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon /> }
            { </IconButton> }
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Brain Health Initiative
            </Typography>
            <Button color="inherit" onClick= { () =>
                {history.push("/changePassword")}}> Change passoword</Button>      
            <Button color="inherit" onClick= {() =>
                {logout(userName)}}> logout</Button>
            </Toolbar>
        </AppBar>
        </Box> */}
        <NavBar></NavBar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={textstyle} >
                <h2>Welcome to Brain Health Initiative Program {name}!!!, This is dashboard </h2>
        </Typography>
        {/* <h1> Welcome to !!</h1>
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
        </p> */}
        </>
    );
};