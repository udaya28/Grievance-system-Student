import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import './GrievanceForm.css';
const GrievanceForm = () => {
  return (
    <div className="form">
      <h1 className="form-head">Post Your Grievance</h1>
      <Typography variant="caption" display="block" align="justify" color="error" style={{margin:"0px 8px"}}>
        NOTE: You can make complaint and can stay anonyms. Your details will not be show to any faculty of college as well as Grievance Committee unless you provide any information in below form. Make sure you don't add any of your details unless you willing to provide your details.
      </Typography>
      <FormGroup className="form-group">
      
        <Grid container spacing={1}>
          
          <Grid item xs={12} sm={6}>
            <FormControl className="single">
              <TextField id="outlined-basic" label="Title" variant="outlined" />
              <FormHelperText id="outlined-basic">
                Short title on your complaint.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className="single">
              <TextField id="select" label="Category" select variant="outlined">
                <MenuItem value="college">College</MenuItem>
                <MenuItem value="hostel">Hostel</MenuItem>
              </TextField>
              <FormHelperText id="select">
                Select category of complaint.
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
          <FormHelperText id="outlined-multiline-static">
            Give a detailed summary of your complaint with required details.
          </FormHelperText>
        </FormControl>
        <Grid container justify="flex-end">
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
          Send
        </Button>
        </Grid>
        
      </FormGroup>
    </div>
  );
};

export default GrievanceForm;
