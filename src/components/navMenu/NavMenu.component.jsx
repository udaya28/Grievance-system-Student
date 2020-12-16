import React from 'react';
import cookies from 'js-cookie';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import IconButton from '@material-ui/core/IconButton';
import { setLogin } from './../../context/context';
import { Link } from 'react-router-dom';
import AlertDialog from './../Dialog/Dialog.component';

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const setIsLoggedIn = React.useContext(setLogin);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    handleOpenDialog();
  };
  const doneSignOut = () => {
    handleClose();
    cookies.remove('token')
    setIsLoggedIn(false);
  };

  const handleProfile = () => {
    handleClose();
  };

  //dialog
  const [OpenDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setAnchorEl(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <IconButton id="simple-menu" onClick={handleClick}>
        <SettingsRoundedIcon style={{ color: 'white' }} />
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
        <Link to="/Grievance-system-Student/profile">
          <MenuItem onClick={handleProfile}>
            <AccountCircleRoundedIcon /> &nbsp;&nbsp;&nbsp;Profile
          </MenuItem>
        </Link>

        <MenuItem onClick={signOut}>
          <ExitToAppRoundedIcon /> &nbsp;&nbsp;&nbsp;Logout
        </MenuItem>
      </Menu>
      <AlertDialog
        SetOpen={OpenDialog}
        handleClose={handleCloseDialog}
        title="Confirm"
        content="Are you sure you want to logout?"
        handleConfirm={doneSignOut}
        confirmButtonColorSecondary={true}
      />
    </div>
  );
}
