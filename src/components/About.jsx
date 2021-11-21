import React from 'react';
import { useTheme } from '@material-ui/styles'; // For mediaquery
import Typography from '@material-ui/core/Typography';
import img from '../images/personal_img.jpeg';
import HeadingText from './HeadingText';
import { useStyles } from '../utils/styles';

const About = () => {
  const theme = useTheme();
  const { avatarContainer, avatarImg, bioInfo, bio, aboutImgBox, personalImg } =
    useStyles(theme);
  return (
    <section id="about" className="about-section">
      <article>
        <HeadingText text="About me" />
        <div className={bioInfo}>
          <Typography className={bio} variant="body1">
            I am a self-taught Front-end web developer, and an enthusiatic
            JavaScript lover, a problem-solver, and a team player with a strong
            desire to learn. My curiosity about how the web works made my
            transition into the tech industry. Adept at using HTML, CSS,
            JavaScript, ReactJS, Git, and modern front-end web tools to produce
            clean code. When I am not coding, you'll find me outdoors or
            catching up with my favorite tv shows.
          </Typography>
          <div className={aboutImgBox}>
            <img src={img} className={personalImg} alt="Maureen" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
