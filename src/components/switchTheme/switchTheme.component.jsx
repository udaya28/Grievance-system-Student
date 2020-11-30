import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {  IconButton } from '@material-ui/core';


import {SetThemes} from './../../context/theme'

const SwitchTheme = () => {
  const [Theme, setTheme] = React.useState(false);
  const setDarkMode = React.useContext(SetThemes);

  const changeTheme = () => {
    setTheme(!Theme);
    setDarkMode(!Theme)
  };


  return (
    <>
      <IconButton onClick={changeTheme} >
          {Theme? <Brightness7Icon/>:<Brightness4Icon/>}
      </IconButton>
    </>
  );
};

export default SwitchTheme;
