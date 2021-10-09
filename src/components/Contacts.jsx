import React, { useState  } from "react";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HeadingText from "./HeadingText";
import MyButton from "./MyButton";

const Contacts = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setContactDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section id="contacts" className="contact-section">
      <div>
        <HeadingText text="Contact me" />
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            sx={{display: 'block'}}
            id="outlined-basic" 
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth 
            name="name"
            value={contactDetails.name} 
            onChange={handleChange}
          />
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            margin="normal" 
            name="email"
            value={contactDetails.email}
            onChange={handleChange}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Let me hear your idea"
            style={{ width: '50%', display: 'block' }}
            name="subject"
            value={contactDetails.subject}
            onChange={handleChange}
          />
          <MyButton value="Submit" href="#" colorType="black" endIcon={<NavigateNextIcon />} />
        </Box>
      </div>
    </section>
  );
};

export default Contacts;
