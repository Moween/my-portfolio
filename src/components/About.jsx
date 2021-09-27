import React from "react";
import Typography from "@material-ui/core/Typography";
import avatar from "../images/personal_img.jpeg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    width: "100%",
    height: "100vh",
    textAlign: "center",
  },
  headingContainer: {
    position: "relative",
  },
  transparentText: {
    opacity: 0.2,
    // wordSpacing: .5,
    letterSpacing: "5px",
  },
  aboutMeText: {
    position: "absolute",
    top: "55%",
    right: "45%",
    wordSpacing: 10,
    fontSize: "1.45rem",
  },
  bioInfo: {
    display: "flex",
    justifyContent: "space-between",
    margintop: 20,
    paddingTop: 30
  },
  bio: {
    width: "50%",
    padding: "1rem",
  },
  imgBox: {
    boxShadow: '0 3px 10px rgb(50, 50, 50)',
    width: '40%',
  },
  personalImg: {
    width: '100%',
    height: "350px",
  },
}));

const About = () => {
  const {
    aboutSection,
    transparentText,
    headingContainer,
    aboutMeText,
    bioInfo,
    bio,
    imgBox,
    personalImg,
  } = useStyles();
  return (
    <section id="about" className={aboutSection}>
      <article>
        <div className={headingContainer}>
          <Typography variant="h3" component="h2" className={transparentText}>
            About Me
          </Typography>
          <Typography className={aboutMeText}>About me</Typography>
        </div>
        <div className={bioInfo}>
          <Typography className={bio}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            perspiciatis a sunt placeat neque quaerat similique ex voluptatum
            deleniti, officia iste beatae ab, architecto non, pariatur
            laudantium sed magnam quo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam reiciendis, odit expedita debitis
            impedit quibusdam incidunt ab temporibus odio sunt repudiandae
            cumque fuga autem exercitationem rerum consequatur similique iusto
            tempora. Commodi quia tempore, repellat debitis repellendus
            consequuntur nesciunt minus. Quia porro magnam ipsa rerum, unde
            quasi, voluptates sit ipsum dicta vitae sequi amet! Minus placeat
            magnam commodi quidem, eius fuga.
          </Typography>
          <div className={imgBox}>
            <img src={avatar} className={personalImg} alt="personal-img" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
