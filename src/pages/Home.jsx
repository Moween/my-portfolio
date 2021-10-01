import React from 'react';
import About from '../components/About';
import MyProjects from '../components/projectsComponent/MyProjects';
import bgImg from '../images/Avater@2x.png'
import Typography from '@material-ui/core/Typography';
import MyButton from '../components/MyButton';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  greetingText: {
    [theme.typography.h1.fontSize]: {
      fontSize: '20rem',
      lineHeight: '1.5rem',
    },
    paddingTop: '0.625rem',
    opacity:  0.2,
    wordSpacing: 20,
    letterSpacing: '7px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
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
  const { greetingText, img } = useStyles();
  return ( 
    <main>
      <section className="landing-section">
        <div className="greeting-text">
          <Typography variant="h1" component="p" style={{color: '#cb6036'}} className={greetingText}>
            Front-end developer
          </Typography>
        </div>
        <div className="intro-text">
          <Typography variant="h4" component="h1">
            Hi! I'm Maureen <Typography variant="h4" style={{color: '#cb6036'}} component="span">Ezeilo </Typography>
            and I love to code..
  
          </Typography>
        </div>
        <div>
          <img className={img} src={bgImg} alt="laptop-guy" />
        </div>
        <div className="social-icons-container">
          <TwitterIcon className="social-icon"/>
          <LinkedInIcon className="social-icon"/>
          <GitHubIcon className="social-icon"/>
        </div>
        <MyButton 
          endIcon={<CloudDownloadOutlinedIcon />}
          href="#"
          value="Download resume"
          colorType="yellow"
        />
      </section>
      <About />        
      <MyProjects />
    </main>
  );
};
 
export default Home;