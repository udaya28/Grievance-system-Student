import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React, { useState } from 'react';
import './GrievanceForm.css';

const GrievanceForm = () => {
  const [Title, setTitle] = useState('');
  const [Category, setCategory] = useState('');
  const [Complaint, setComplaint] = useState('');
  const [ValidationState, setValidationState] = useState(false);
  // const [IsValid, setIsValid] = useState(true);
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleComplaint = (e) => {
    setComplaint(e.target.value);
  };
  const handleFormSubmit = () => {
    setValidationState(true);
    if(Title !== '' && Category !== '' && Complaint !== ''){
      console.log(Title, Category, Complaint ,Date.now());
    }
  };

  return (
    <div className="form">
      <h1 className="form-head">Post Your Grievance</h1>
      <Typography
        variant="caption"
        display="block"
        align="left"
        color="error"
        style={{ margin: '0px 8px 10px 8px' }}
      >
        NOTE : Your personal information is kept Anonymous to grievance
        committee, until you reveal it in complaint column.
      </Typography>
      <FormGroup className="form-group">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormControl className="single">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={Title}
                onInput={handleTitle}
                error={ValidationState && Title === ''}
                helperText="Short title on your complaint"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className="single">
              <TextField
                id="select"
                label="Category"
                select
                variant="outlined"
                value={Category}
                onChange={handleCategory}
                error={ValidationState && Category === ''}
                helperText="Select category of complaint"
              >
                <MenuItem value="college">College</MenuItem>
                <MenuItem value="hostel">Hostel</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl className="single">
          <TextField
            id="outlined-multiline-static"
            label="Complaint"
            multiline
            rows={10}
            onInput={handleComplaint}
            value={Complaint}
            variant="outlined"
            error={ValidationState && Complaint === ''}
            helperText="Give summary of your complaint with required details"
          />
        </FormControl>
        <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleFormSubmit}
          >
            Send
          </Button>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default GrievanceForm;
