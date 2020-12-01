import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './../header/Header.component';
import './Home.styles.css';
import ImageHeader from '../imageHeader/ImageHeader';
import Details from './../details/Details.component';
import GrievanceForm from '../grievanceForm/GrievanceForm';
const Home = () => {
  return (
    <Paper>
      <Header />
      <ImageHeader />
      <Container maxWidth="md">
        <Grid container direction="column">
          <Details />
          <GrievanceForm/>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Home;
