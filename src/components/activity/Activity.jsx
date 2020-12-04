import { Card, Grid } from '@material-ui/core';
import React from 'react';
import './Activity.css';

const data = [
  {
    title: 'complaint about online class',
  },
];

const Activity = () => {
  return (
    <div>
      <h1 className="activity-head">Previous Activity</h1>
      <Grid container spacing={1} style={{ padding: '10px 5px 30px 5px' }}>
      <Grid item xs={12} sm={6}>
          <Grid container className="activity-container">
            <Grid item>
              <h1 className="activity-title">complaint about online class</h1>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <p className="time-stamp">4 Dec 2020 10:45 AM</p>
              </Grid>
              <Grid item xs={6}>
                <p className="activity-status">seen</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container className="activity-container">
            <Grid item>
              <h1 className="activity-title">complaint about online class</h1>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <p className="time-stamp">4 Dec 2020 10:45 AM</p>
              </Grid>
              <Grid item xs={6}>
                <p className="activity-status">seen</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container className="activity-container">
            <Grid item>
              <h1 className="activity-title">complaint about online class</h1>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <p className="time-stamp">4 Dec 2020 10:45 AM</p>
              </Grid>
              <Grid item xs={6}>
                <p className="activity-status">seen</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container className="activity-container">
            <Grid item>
              <h1 className="activity-title">complaint about online class</h1>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <p className="time-stamp">4 Dec 2020 10:45 AM</p>
              </Grid>
              <Grid item xs={6}>
                <p className="activity-status">seen</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Activity;
