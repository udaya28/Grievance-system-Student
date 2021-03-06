import { React, useEffect, useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './../header/Header.component';
import ImageHeader from '../imageHeader/ImageHeader';
import Details from './../details/Details.component';
import GrievanceForm from '../grievanceForm/GrievanceForm';
import Footer from '../footer/Footer';
import Axios from 'axios';
import cookie from 'js-cookie';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../profile/Profile';
import Activity from '../activity/Activity';
import { studentId } from '../../context/context';
// const data = {
//   firstName: 'Udaya',
//   secondName: 'M',
//   rollNumber: '19CSR118',
//   gender: 'male',
//   joinYear: 2019,
//   department: 'CSE',
//   totalComplaintsMade: 0,
//   totalComplaintsClosed: 0,
//   dateOfBirth: '28-01-2002',
// };

const Home = () => {
  const [studentsData, setStudentsData] = useState({});
  const [complaintsData, setComplaintsData] = useState([]);
  const student = useContext(studentId);
  useEffect(() => {
    (async () => {
      const details = await Axios.get(
        `https://grievance-app-backend.herokuapp.com/student/details/${student.id}`,
        {
          headers: {
            token: cookie.get('token'),
          },
        }
      );
      if (details.status === 200) {
        setStudentsData(details.data.details['0']);
      }
      getComplaint();
    })();
    // eslint-disable-next-line
  }, []);

  const getComplaint = async () => {
    const complaint = await Axios.get(
      `https://grievance-app-backend.herokuapp.com/student/complaint/${student.id}`,
      {
        headers: {
          token: cookie.get('token'),
        },
      }
    );
    if (complaint.status === 200) {
      setComplaintsData(complaint.data.data.complaints);
    }
  };



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
              <Profile data={studentsData} complaints={complaintsData}  />
            </Container>
          </Route>

          <Route path="/Grievance-system-Student/">
            <ImageHeader />
            <Container maxWidth="md">
              <Grid container direction="column">
                <GrievanceForm
                  details={studentsData}
                  refreshComplaint={getComplaint}
                />
                <Activity data={complaintsData} />
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
