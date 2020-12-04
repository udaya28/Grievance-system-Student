import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
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
const data = {
  firstName: 'Udaya',
  secondName: 'M',
  rollNumber: '19CSR118',
  gender: 'male',
  joinYear: 2019,
  department: 'CSE',
  totalComplaintsMade: 0,
  dateOfBirth:"28-01-2002"
};

const IconGroup = ({ head, content, icon }) => {
  return (
    <Grid container justify="center" alignContent="center" direction="row">
      <Grid container alignContent="center" justify="center">
        <Avatar style={{ width: '35px', height: '35px' }}>{icon}</Avatar>
      </Grid>
      <Grid item>
        <h1 className="sub-head">{head}</h1>
        <p style={{fontWeight:"bold"}}>{content}</p>
      </Grid>
    </Grid>
  );
};

const Profile = () => {
  return (
    <Grid
      container
      className="profile-container"
      alignItems="center"
      justify="center"
      direction="row"
      style={{marginTop:"80px" , marginBottom:"60px"}}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ padding: '20px' }}
        direction="column"
      >
        <Grid item xs={12} >
          <Avatar style={{ width: '80px', height: '80px' }}>
            <PersonIcon className="icon-lg" style={{backgroundColor:"3a42bb",}} />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <h1 className="sub-head">Udaya M</h1>
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
              content="2019 - 2023"
              icon={<BallotIcon  />}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Department" content="CSE" icon={<BookIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Degree" content="B.E CES" icon={<StarsIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Date of birth" content="28-01-2002" icon={<EventNoteIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Roll number" content="19CSR118" icon={<ContactsIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Complaints made" content="0" icon={<AssignmentLateIcon />} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <IconGroup head="Complaints closed" content="0" icon={<AssignmentTurnedInIcon />} />
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Profile;
