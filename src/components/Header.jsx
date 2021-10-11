import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  brandLogo: {
    width: '25%',
  },
  brandLogoText: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#f7f124',
    },
  }
});

const Header = () => {
  const { brandLogo, brandLogoText } = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return ( 
    <header>
        {!showMenu && <Typography className={brandLogo} variant="h5" component="h3">
          <Link to='/' className={brandLogoText}>
            Orbie
          </Link>
        </Typography> }       
        <NavBar showMenu={showMenu} toggleMenu={toggleMenu} />
    </header> 
  );
}
 
export default Header;