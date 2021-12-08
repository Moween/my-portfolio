import React from 'react';
import Box from '@material-ui/core/Box';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/styles';
import { ToastContainer } from 'react-toastify';

import wave from '../images/wave.png';
import { useStyles } from '../utils/styles';
import About from '../components/About';
import Achievement from '../components/Achievement';
import Article from '../components/Article';
import Contacts from '../components/Contacts';
import MyButton from '../components/MyButton';
import MyProjects from '../components/projectsComponent/MyProjects';
import SocialIcons from '../components/SocialIcons';
import ScrollButton from '../components/ScrollButton';

const Home = () => {
  const theme = useTheme();
  const { greetingText } = useStyles(theme);
  return (
    <Box component="main">
      <ToastContainer autoClose={false} />
      <Box component="section" className="landing-section">
        <Box>
          <Box className="greeting-text">
            <Typography variant="body1">
              <span>
                Hi! I'm Obiageli Maureen Ezeilo
                <img src={wave} alt="waving-hand" className="wave" />
              </span>
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              style={{ color: '#fff' }}
              className={`${greetingText} typewriting`}
            >
              Front-end developer
            </Typography>
          </Box>
          <Box className="intro-text">
            <Typography variant="body1" component="p">
              An enthusiastic front-end developer based in Nigeria. Who believes
              in making the world a beautiful place with a beautiful website...
            </Typography>
            <MyButton
              endIcon={<CloudDownloadOutlinedIcon />}
              href="https://docs.google.com/document/d/1a8tOj2oiga0D14iPbPSV0STq1oVc6u8RhEeKE0pJOjU/edit?usp=sharing"
              value="Download resume"
              target="new"
              colorType="yellow"
            />
          </Box>
          <SocialIcons />
        </Box>
      </Box>
      <About />
      <MyProjects />
      <Achievement />
      <Article />
      <Contacts />
      <ScrollButton />
    </Box>
  );
};

export default Home;
