import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import SwitchTheme from './../switchTheme/switchTheme.component';
import NavMenu from '../navMenu/NavMenu.component';
const Header = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">Grievance System VCET</Typography>
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
