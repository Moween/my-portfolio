import React from 'react';
import { useTheme } from '@material-ui/styles'; // For mediaquery
import Typography from '@material-ui/core/Typography';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

import wave from '../images/wave.png';
import { useStyles } from '../utils/styles';
import About from '../components/About';
import Achievement from '../components/Achievement';
import Article from '../components/Article';
import Contacts from '../components/Contacts';
import MyButton from '../components/MyButton';
import MyProjects from '../components/projectsComponent/MyProjects';
import SocialIcons from '../components/SocialIcons';

const Home = () => {
  const theme = useTheme();
  const { greetingText } = useStyles(theme);
  return (
    <main>
      <section className="landing-section">
        <div className="greeting-text">
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
        </div>
        <div className="intro-text">
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
        </div>
        <SocialIcons />
      </section>
      <About />
      <MyProjects />
      <Achievement />
      <Article />
      <Contacts />
    </main>
  );
};

export default Home;
