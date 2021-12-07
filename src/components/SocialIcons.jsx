import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialIcons = () => {
  return (
    <Box className="social-icons-container">
      <Button
        className="social-icon"
        href="https://www.twitter.com/iam_Moween"
        target="new"
      >
        <TwitterIcon />
      </Button>
      <Button
        className="social-icon"
        href="https://www.linkedin.com/in/obiageli-ezeilo/"
        target="new"
      >
        <LinkedInIcon className="social-icon" />
      </Button>
      <Button
        className="social-icon"
        href="https://www.github.com/Moween"
        target="new"
      >
        <GitHubIcon className="social-icon" />
      </Button>
    </Box>
  );
};

export default SocialIcons;
