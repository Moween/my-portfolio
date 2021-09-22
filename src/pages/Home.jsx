import React from 'react';
import bgImg from '../images/Avater@2x.png'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  greetingText: {
    [theme.typography.h1.fontSize]: {
      fontSize: '20rem',
      lineHeight: '1.5rem',
    },
    opacity:  0.2,
    wordSpacing: 20,
    letterSpacing: '7px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },

  button: {
    backgroundColor: '#FFF124',
  },

  introText: {
    [theme.breakpoints.down('md')]: {
      right: '10%',
    }
  },

  img: {
    [theme.breakpoints.down('sm')]: {
      
    }
  }
}));

const Home = () => {
  const { greetingText, img, button } = useStyles();
  return ( 
    <main className="main">
      <div className="greeting-text">
        <Typography variant="h1" component="p" style={{color: '#cb6036'}} className={greetingText}>
        Front-end developer
        </Typography>
      </div>
      <div className="intro-text">
        <Typography variant="h4" component="h1">
          Hi! I'm Maureen <Typography variant="h4"  component="span">Ezeilo </Typography>
          and I love to code..

        </Typography>
      </div>
      <div>
        <img className={img} src={bgImg} alt="laptop-guy" />
      </div>
      <Button 
        variant="contained"
        component="span" 
        className={button}
        endIcon={<CloudDownloadOutlinedIcon />}
        href="#"
      >
        Download resume
      </Button>
    </main>
  );
};
 
export default Home;