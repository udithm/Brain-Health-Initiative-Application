import React from "react";
import { useSelector } from "react-redux";

//import Button from '@material-ui/core/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export const DashboardView = ({userName,userId,orgName,name,role,logout}) =>{
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Button color="inherit"> Change passoword</Button>      
            <Button color="inherit" onClick= {() =>
                {logout(userName)}}> logout</Button>
            </Toolbar>
        </AppBar>
        </Box>
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