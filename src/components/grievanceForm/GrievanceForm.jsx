import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import AlertDialog from './../Dialog/Dialog.component';
import './GrievanceForm.css';

const GrievanceForm = ({ details }) => {
  const [complaintData, setComplaintData] = useState({});
  const { _id, departmentName, jointYear, gender } = details;
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [complaint, setComplaint] = useState('');
  const [ValidationState, setValidationState] = useState(false);
  useEffect(() => {
    setComplaintData({
      ...complaintData,
      studentId: _id,
      departmentName,
      jointYear,
      gender,
      status: 'unseen',
      response: '',
    });
    return () => {};
  }, [details]);

  // console.log( );

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleComplaint = (e) => {
    setComplaint(e.target.value);
  };
  const handleFormSubmit = async () => {
    setValidationState(true);
    console.log(title, complaint, category);
    // console.log({
    //   ...complaintData,
    //   title,
    //   complaint,
    //   category,
    //   timeStamp: new Date().toString(),
    // });
    if (title !== '' && category !== '' && complaint !== '') {
      console.log({
        ...complaintData,
        title,
        complaint,
        category,
        timeStamp: new Date().toString(),
      });
      handleOpenDialog();
    }
  };

  const doneSubmit = () => {
    setTitle('');
    setCategory('');
    setComplaint('');
    setOpenDialog(false);
    setValidationState(false);
  };

  //dialog
  const [OpenDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
        NOTE : Your personal information is kept anonymous to the grievance
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
                value={title}
                onInput={handleTitle}
                error={ValidationState && title === ''}
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
                value={category}
                onChange={handleCategory}
                error={ValidationState && category === ''}
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
            value={complaint}
            variant="outlined"
            error={ValidationState && complaint === ''}
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
      <AlertDialog
        SetOpen={OpenDialog}
        handleClose={handleCloseDialog}
        title="Confirm"
        content="Once submitted you can't change or delete your complaint."
        handleConfirm={doneSubmit}
        confirmButtonColorSecondary={false}
      />
    </div>
  );
};

export default GrievanceForm;
