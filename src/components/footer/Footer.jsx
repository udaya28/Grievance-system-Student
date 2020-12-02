import React from 'react';
import { AppBar, Grid } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="relative" style={{ top: 'auto', bottom: 0 }} color="default">
      <Grid container justify="space-between" style={{ padding: '25px 5px' }}>
        <Grid item sm={6} xs={12}>
          Copyright © 2020
        </Grid>
        <Grid item sm={6} xs={12}>
          Developed By Anonymous with ❤️
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
