import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './../header/Header.component';
import './Home.styles.css';
import ImageHeader from '../imageHeader/ImageHeader';
import Details from './../details/Details.component';
import GrievanceForm from '../grievanceForm/GrievanceForm';
import Footer from '../footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../profile/Profile';
import Activity from '../activity/Activity';
const data = {
  firstName: 'Udaya',
  secondName: 'M',
  rollNumber: '19CSR118',
  gender: 'male',
  joinYear: 2019,
  department: 'CSE',
  totalComplaintsMade: 0,
  totalComplaintsClosed:0,
  dateOfBirth:"28-01-2002"
};


const Home = () => {
  return (
    <Router>
      <Paper>
        <Header />
        <Switch>
          <Route exact path="/Grievance-system-Student/about">
            <Container maxWidth="md">
              <Details />
            </Container>
          </Route>
          <Route exact path="/Grievance-system-Student/profile">
            <Container maxWidth="md">
              <Profile data={data}   />
            </Container>
          </Route>

          <Route path="/Grievance-system-Student/">
            <ImageHeader />
            <Container maxWidth="md">
              <Grid container direction="column">
                <GrievanceForm />
                <Activity/>
              </Grid>
            </Container>
          </Route>
        </Switch>

        <Footer />
      </Paper>
    </Router>
  );
};

export default Home;
