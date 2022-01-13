import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Form from './Form';

const ContactForm = ({ open, handleClose }) => {
  return (
    <Box>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="xl"
      >
        <DialogTitle
          sx={{
            [`& .MuiDialogTitle-root`]: {
              m: '0 auto',
            },
          }}
        >
          Hire Me Now
        </DialogTitle>
        <DialogContent>
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
export default ContactForm;
