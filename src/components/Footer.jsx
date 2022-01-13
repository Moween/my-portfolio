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
        <SocialIcons />
      </Box>
      <Box sx={{ display: { md: 'flex' } }}>
        <Typography sx={{ color: '#dcab07' }}>
          &copy; 2021 Ezeilo Orbie
        </Typography>
      </Box>
      <Typography>Inspired by Somto Nwakasi❤️</Typography>
    </Box>
  );
};

export default Footer;
