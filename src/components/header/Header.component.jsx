import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import NavMenu from '../navMenu/NavMenu.component';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <h3 className="mon">VCET</h3>
          </Grid>

          <Grid item>
            <Grid container justify="space-between" alignItems="center">
              <NavLink
                to="/Grievance-system-Student/"
                // activeClassName="selected"
                // activeStyle={{
                //   fontWeight: 'bold',
                // }}
                style={{
                  padding: '0px 10px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/Grievance-system-Student/about"
                style={{
                  padding: '0px 10px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                About
              </NavLink>
              {/* <SwitchTheme /> */}
              <NavMenu />
            </Grid>

            {/* <Grid item direction="row" alignItems="center">
                
            </Grid> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
