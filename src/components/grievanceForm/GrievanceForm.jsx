import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import './GrievanceForm.css';
const GrievanceForm = () => {
  return (
    <div className="form">
      <h1 className="form-head">Post Your Grievance</h1>
      <FormGroup className="form-group">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormControl className="single">
              <TextField id="outlined-basic" label="Title" variant="outlined" />
              <FormHelperText id="outlined-basic">
                Short title on your Grievance.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className="single">
              <TextField id="select" label="Category" select variant="outlined">
                <MenuItem value="college">College</MenuItem>
                <MenuItem value="hostel">Hostel</MenuItem>
              </TextField>
              <FormHelperText id="outlined-basic">
                select your Category.
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>

        <FormControl className="single">
          <TextField
            id="outlined-multiline-static"
            label="Complaint"
            multiline
            rows={10}
            //   defaultValue="Default Value"
            variant="outlined"
          />
          <FormHelperText id="outlined-basic">
            Give a detailed summary of your complaint.
          </FormHelperText>
        </FormControl>
        <Grid container xs={12} justify="flex-end">
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
          Send
        </Button>
        </Grid>
        
      </FormGroup>
    </div>
  );
};

export default GrievanceForm;
