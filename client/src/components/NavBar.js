import * as React from 'react';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AppBar from '@mui/material/AppBar';

export const NavBar = () => {
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
    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Brain Health Initiative
    </Typography>
    <AccountMenu></AccountMenu>
    </Toolbar>
</AppBar>
</Box>
)
}