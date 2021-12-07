import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../utils/styles';
import NavBar from './NavBar';
import { MediaQueryContext } from './App';

const Header = () => {
  const { mobile, tablet } = useContext(MediaQueryContext);
  const { brandLogo, brandLogoText } = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (mobile || tablet) {
      setShowMenu((prevState) => !prevState);
    }
  };

  return (
    <Box component="header">
      {!showMenu && (
        <Typography className={brandLogo} variant="h5" component="h3">
          <Link to="/" className={brandLogoText}>
            Orbie
          </Link>
        </Typography>
      )}
      <NavBar showMenu={showMenu} toggleMenu={toggleMenu} />
    </Box>
  );
};

export default Header;
