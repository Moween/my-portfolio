import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../utils/styles';
import SocialIcons from './SocialIcons';

const Footer = () => {
  const { footer } = useStyles();
  return (
    <Box component="footer" className={footer}>
      <Box>
        <Typography variant="body1" component="p">
          &copy; 2021 Ezeilo Orbie
        </Typography>
      </Box>
      <Box>
        <SocialIcons />
      </Box>
    </Box>
  );
};

export default Footer;
