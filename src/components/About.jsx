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
          <Typography className={bio} variant="body1">
            I am a self-taught Front-end web developer, and an enthusiatic
            JavaScript lover, a problem-solver, and a team player with a strong
            desire to learn. My curiosity about how the web works made my
            transition into the tech industry. Adept at using HTML, CSS,
            JavaScript, ReactJS, Git, and modern front-end web tools to produce
            clean code. When I am not coding, you'll find me outdoors or
            catching up with my favorite tv shows.
          </Typography>
          <Box className={aboutImgBox}>
            <img src={img} className={personalImg} alt="Maureen" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
