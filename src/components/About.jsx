import React from 'react';
import { useTheme } from '@material-ui/styles'; // For mediaquery
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import img from '../images/personal_img.jpeg';
import HeadingText from './HeadingText';
import { useStyles } from '../utils/styles';

const About = () => {
  const theme = useTheme();
  const { bioInfo, bio, aboutImgBox, personalImg } =
    useStyles(theme);
  return (
    <Box component="section" id="about" className="about-section">
      <Box component="article">
        <HeadingText text="About me" />
        <Box className={bioInfo}>
          <Box className={bio}>
            <Typography variant="body1">
              I am a self-taught Front-end web developer, and an enthusiatic
              JavaScript lover who turns static web designs into functional,
              scalable and optimized web applications..My curiosity about how
              the web works made my transition into the tech industry. When I am
              not coding, you'll find me outdoors or catching up with my
              favorite tv shows.
            </Typography>
            <Box sx={{ mt: '1rem' }}>
              <Typography variant="h6" component="h6">
                Languages
              </Typography>
              <Typography>
                JavaScript | ReactJS | Redux | React Hooks | Material-UI |
                Bootstrap | HTML | CSS
              </Typography>
            </Box>
            <Box sx={{ mt: '1rem' }}>
              <Typography variant="h6" component="h6">
                Skills
              </Typography>
              <Typography>
                Git Workflow, Pair programming, team playing, problem solving
              </Typography>
            </Box>
          </Box>
          <Box className={aboutImgBox}>
            <img src={img} className={personalImg} alt="Maureen" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
