import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const HeadingText = ({ text }) => {
  return (
    <Box>
      <Box className="heading-container">
        <Typography variant="h2" component="h2" className="transparent-text">
          {text}
        </Typography>
        <Typography className="normal-text">{text}</Typography>
      </Box>
    </Box>
  )
}

export default HeadingText;
