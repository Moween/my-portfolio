import React from 'react';
import Typography from '@material-ui/core/Typography';

const HeadingText = ({ text }) => {
  return (
    <div>
      <div className="heading-container">
        <Typography variant="h3" component="h2" className="transparent-text">
          {text}
        </Typography>
        <Typography className="project-text">{text}</Typography>
      </div>
    </div>
  )
}

export default HeadingText;
