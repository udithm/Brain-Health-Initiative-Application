import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {userLogout} from "../services/AuthApi";
import { myProfile } from '../services/MyProfileApi';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const uId = localStorage.getItem("userId");
  const jwt = localStorage.getItem("jwt");
  
  const history = useHistory();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.AuthReducer);
  
  const logout = (userName) => userLogout(userName,history)(dispatch);
  const mypro = (uId) => myProfile(uId,history)(dispatch);
  const loadProfile = () => {
      if (jwt && uId && !authState.name) {
          myProfile(uId)(dispatch);
      }
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
        loadProfile()
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          <Avatar />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        //onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
            //   bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      
      <MenuItem>
        <IconButton
            onClick= {() =>
                {mypro(uId);
                console.log("gasfyu");
                }}
            size="small"
            sx={{ ml: 2 }}
          >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon> 
          My profile        
          </IconButton> 
        </MenuItem>
        <MenuItem>
        <IconButton
            onClick= { () =>
                {history.push("/changePassword")}}
            size="small"
            sx={{ ml: 2 }}
        >
          <ListItemIcon>
            <KeyIcon fontSize="small" />
          </ListItemIcon> 
          Change Password        
          </IconButton> 
        </MenuItem>
        <Divider />

        <MenuItem>
        <IconButton
            onClick= {() =>
                {logout(uId)}}
            size="small"
            sx={{ ml: 2 }}
          >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon> 
          Logout               
          </IconButton>
        </MenuItem>
      </Menu>
    </>
)};