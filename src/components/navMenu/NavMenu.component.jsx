import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import IconButton from '@material-ui/core/IconButton';
import {setLogin} from './../../context/context'
import { useHistory } from "react-router-dom";

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const setIsLoggedIn = React.useContext(setLogin);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOut = () =>{
    handleClose();
    setIsLoggedIn(false);
  }
  let history = useHistory();
  const handleProfile = ()=>{
    history.push('/Grievance-system-Student/profile')
    handleClose();

  }


  return (
    <div>
      <IconButton id="simple-menu" onClick={handleClick} >
        <SettingsRoundedIcon style={{color:"white"}} />
      </IconButton>
      <Menu
        id="menu-list-grow"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleProfile}>
          <AccountCircleRoundedIcon /> &nbsp;&nbsp;&nbsp;Profile
        </MenuItem>
        <MenuItem onClick={signOut}>
          <ExitToAppRoundedIcon /> &nbsp;&nbsp;&nbsp;Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
