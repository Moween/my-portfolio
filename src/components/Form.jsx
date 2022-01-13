import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import MyButton from './MyButton';
import Validation from './Validation';

const ContactForm = () => {
  const formik = Validation();
  return (
    <Box
      component="form"
      id="contactform"
      sx={{
        width: '100%',
        m: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <TextField
        fullWidth
        id="name"
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        variant="outlined"
        margin="normal"
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        margin="normal"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="message"
        variant="outlined"
        label="Send me an offer*"
        margin="normal"
        name="message"
        maxRows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <MyButton type="submit" endIcon={<NavigateNextIcon />} value="Submit" />
    </Box>
  );
};

export default ContactForm;
