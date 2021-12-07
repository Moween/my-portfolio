import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MyButton from './MyButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

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
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="normal"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Let me hear your idea"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <MyButton
        value="Submit"
        href="#"
        colorType="black"
        sx={{ display: 'block' }}
        endIcon={<NavigateNextIcon />}
      />
    </Box>
  );
};

export default ContactForm;
