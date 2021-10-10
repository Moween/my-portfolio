import React from "react";
import { useTheme } from "@material-ui/styles"; // For mediaquery
import Typography from "@material-ui/core/Typography";
import img from "../images/personal_img.jpeg";
import HeadingText from "./HeadingText";
import { useStyles } from "../utils/styles";

const About = () => {
  const theme = useTheme();
  const { avatarContainer, avatarImg, bioInfo, bio, aboutImgBox, personalImg } =
    useStyles(theme);
  const avatar = img;
  return (
    <section id="about" className="about-section">
      <article>
        <HeadingText text="About me" />
        <div className={bioInfo}>
          <Typography className={bio} variant="body1">
            <div className={avatarContainer}>
              <img src={avatar} className={avatarImg} alt="Maureen" />
            </div>
            <Typography variant="subtitle1">
              Hi! A little story of how I found myself in tech
            </Typography>
            I decided to level up my career. So I bought a financial analysis
            course on Udemy, which was about data. Only for me to keep wanting
            to know more about data. so I decided to check on youtube, I found
            out about SQL blah blah.... from SQL I started watching{" "}
            <abbr title="HyperText Markup Language">HTML</abbr> videos. <br />
            Fast track to January 2021, my curiosity about how the web works
            made my transition into the tech industry. The last months have been
            very intense as I have honed my skills in HTML, CSS, JavaScript,
            ReactJS, Git, and modern front-end web tools. I am a self-taught
            Front-end web developer, and an enthusiaic JavaScript lover,
            self-motivated programmer, a problem-solver, and  a team player with a
            strong desire to learn. Here I am ready to change the world with my
            code....
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
