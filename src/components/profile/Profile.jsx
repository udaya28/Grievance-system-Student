import { Avatar, Grid } from '@material-ui/core';
import { React, useEffect } from 'react';
import './profile.css';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BallotIcon from '@material-ui/icons/Ballot';
import BookIcon from '@material-ui/icons/Book';
import StarsIcon from '@material-ui/icons/Stars';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import ContactsIcon from '@material-ui/icons/Contacts';
import Axios from 'axios';
import cookie from 'js-cookie'
const data = {
  firstName: 'Udaya',
  secondName: 'M',
  rollNumber: '19CSR118',
  gender: 'male',
  joinYear: 2019,
  department: 'CSE',
  totalComplaintsMade: 0,
  totalComplaintsClosed: 0,
  dateOfBirth: '28-01-2002',
};

const IconGroup = ({ head, content, icon }) => {
  return (
    <Grid container justify="center" alignContent="center" direction="row">
      <Grid container alignContent="center" justify="center">
        <Avatar style={{ width: '35px', height: '35px' }}>{icon}</Avatar>
      </Grid>
      <Grid item>
        <h1 className="sub-head">{head}</h1>
        <p style={{ fontWeight: 'bold' }}>{content}</p>
      </Grid>
    </Grid>
  );
};

const Profile = ({ data }) => {
  useEffect(() => {
    (async () => {
      const details = await Axios.get(
        'https://grievance-app-backend.herokuapp.com/student/details/5fd6f2bac6d1fa27dc5cea11',
        {
          headers: {
            token: cookie.get('token'),
          },
        }
      );
      console.log(details.data.details['0']);
    })();
    return () => {};
  }, []);
  const {
    firstName,
    secondName,
    joinYear,
    department,
    dateOfBirth,
    rollNumber,
    totalComplaintsMade,
    totalComplaintsClosed,
  } = data;
  return (
    <Grid
      container
      className="profile-container"
      alignItems="center"
      justify="center"
      direction="row"
      style={{ paddingTop: '80px', paddingBottom: '60px' }}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ padding: '20px' }}
        direction="column"
      >
        <Grid item xs={12}>
          <Avatar style={{ width: '80px', height: '80px' }}>
            <PersonIcon
              className="icon-lg"
              style={{ backgroundColor: '3a42bb' }}
            />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <h1 className="sub-head">{firstName + ' ' + secondName}</h1>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Campus" content="VCET" icon={<LocationOnIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup
              head="Batch"
              content={`${joinYear} - ${joinYear + 4}`}
              icon={<BallotIcon />}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup
              head="Department"
              content={department}
              icon={<BookIcon />}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Degree" content="B.E" icon={<StarsIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup
              head="Date of birth"
              content={dateOfBirth}
              icon={<EventNoteIcon />}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup
              head="Roll number"
              content={rollNumber}
              icon={<ContactsIcon />}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup
              head="Complaints made"
              content={totalComplaintsMade}
              icon={<AssignmentLateIcon />}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup
              head="Complaints closed"
              content={totalComplaintsClosed}
              icon={<AssignmentTurnedInIcon />}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
