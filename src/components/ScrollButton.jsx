import React, { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';


const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const fabStyle = {
    position: 'fixed',
    bottom: 100,
    right: 10,
    zIndex: 1,
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [isVisible]);

  return (
    <Fab
      aria-label="scroll-button"
      onClick={scrollToTop}
      size="medium"
      sx={
        {
          opacity: isVisible ? 1 : 0,
          ...fabStyle,
        }
      }
    >
      <UpIcon />
    </Fab>
  );
};

export default ScrollButton;
