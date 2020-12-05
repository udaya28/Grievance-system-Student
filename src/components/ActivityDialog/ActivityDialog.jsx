import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ActivityDialog = ({ open, handleClose, data }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{data.title}</DialogTitle>
        <DialogContent dividers={true}>
  <DialogContentText id="scroll-dialog-description">
      <h1>complaint</h1>
      {data.complaint }</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActivityDialog;
