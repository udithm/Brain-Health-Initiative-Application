import * as React from 'react';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import { Button, Link } from '@mui/material';
import { red } from '@mui/material/colors';

export const NavBar = () => {
    const authState = useSelector(state => state.AuthReducer);

    return (
        <Box sx={{ flexGrow: 1 }}  >
            <AppBar position="static" color="primary" >
                <Toolbar>
                    {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
    >
        <MenuIcon /> */}
                    {/* </IconButton> */}

                    <Typography variant="h5" component="div" sx={ {flexGrow: 1}} >
                        Brain Health Initiative
                    </Typography>
                    <Link href="/dashboard" underline="none">
                                <Button sx={{color: "#fff"}} >
Dashboard
                                </Button>
                    </Link>
                    {/* <div> */}

                    {authState.role ? (authState.role === "ADMIN" ? (
                        <>
                            <Link href="/create" underline="none">
                                <Button sx={{ color: "#fff" }}>
                                    Create
                                </Button>
                            </Link>
                            <Link href="/analyticsTable" underline='none'>
                                <Button sx={{ color: "#fff" }}>
                                    Analytics
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/addPatient" underline="none">
                                <Button sx={{ color: "#fff" }} >
                                    Add Patient
                                </Button>
                            </Link>
                            <Link href="/searchPatient" underline="none">
                                <Button sx={{ color: "#fff" }} >
                                    Search Patient 
                                </Button>
                            </Link>
                            <Link href="/doctorConsultations" underline="none">
                                <Button sx={{ color: "#fff" }} >
                                    My consulatations 
                                </Button>
                            </Link>
                            <Link href="/refered" underline="none">
                                <Button sx={{ color: "#fff" }} >
                                    Referred List
                                </Button>
                            </Link>

                        </>
                    )) : (
                        <>
                            <Link href="/patientOptions" underline="none">
                                <Button sx={{ color: "#fff" }} >
                                    Patient Options
                                </Button>
                            </Link>
                            <Link href="/refered" underline="none">
                                <Button sx={{ color: "#fff" }} >
                                    Referred List
                                </Button>
                            </Link>

                        </>
                    )}
                    {/* </div> */}

                    <AccountMenu></AccountMenu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}