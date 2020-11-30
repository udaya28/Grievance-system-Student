import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import SwitchTheme from './../switchTheme/switchTheme.component';
import NavMenu from '../navMenu/NavMenu.component';
const Header = () => {
  return (
    <AppBar position="fixed" color="default" >
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <h3 className="mon">VCET</h3>
          </Grid>
          <Grid item>
              <Grid container direction="row" alignItems="center">
                <SwitchTheme />
                <NavMenu/>
            </Grid>
          </Grid>
            
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
