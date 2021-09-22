import React, { useState} from 'react';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  brandLogo: {
    width: '25%',
  },
});

const Header = () => {
  const { brandLogo } = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return ( 
    <header>
        {!showMenu && <Typography className={brandLogo} variant="h5" component="h3">
          Maureen
        </Typography> }       
        <NavBar showMenu={showMenu} toggleMenu={toggleMenu} />
    </header> 
  );
}
 
export default Header;