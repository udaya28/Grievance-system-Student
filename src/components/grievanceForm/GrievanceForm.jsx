import {
  FormControl,
  FormGroup,
  FormHelperText,
  MenuItem,
  TextField,
} from '@material-ui/core';
import React from 'react';
import './GrievanceForm.css';
const GrievanceForm = () => {
  return (
    <div className="form">
      <h1 className="form-head">Post Your Grievance</h1>
      <FormGroup className="form-group">
        <FormControl>
          <TextField
            id="select"
            label="Category"
            select
            variant="outlined"
          >
            <MenuItem value="college">College</MenuItem>
            <MenuItem value="hostel">Hostel</MenuItem>
          </TextField>
          <FormHelperText id="outlined-basic">
            select your Category.
          </FormHelperText>
        </FormControl>
        <FormControl className="single">
          <TextField id="outlined-basic" label="Title" variant="outlined" />
          <FormHelperText id="outlined-basic">
            Short title on your Grievance.
          </FormHelperText>
        </FormControl>
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
      </FormGroup>
    </div>
  );
};

export default GrievanceForm;
