import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import HeadingText from './HeadingText';
import Cards from './Cards';
import FormDialog from './FormDialog';
import { useStyles } from '../utils/styles';

const Contacts = () => {
  const [open, setOpen] = useState(false);
  const { hireBtn } = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="section" id="contacts" className="contact-section">
      <Box>
        <HeadingText text="Contact me" />
        <Cards />
        <Button
          onClick={handleClickOpen}
          sx={{
            [`& .MuiButton-root`]: { mt: '3rem' },
          }}
          className={hireBtn}
        >
          Hire me
        </Button>
        <FormDialog open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default Contacts;
