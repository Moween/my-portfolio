import React from "react";
import { useTheme } from "@material-ui/styles"; // For mediaquery
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { useStyles } from "../utils/styles";
import About from "../components/About";
import Achievement from "../components/Achievement";
import Article from "../components/Article";
import Contacts from "../components/Contacts";
import MyButton from "../components/MyButton";
import MyProjects from "../components/projectsComponent/MyProjects";

const Home = () => {
  const theme = useTheme();
  const { greetingText } = useStyles(theme);
  return (
    <main>
      <section className="landing-section">
        <div className="greeting-text">
          <Typography
            variant="h3"
            component="h1"
            style={{ color: "#fff" }}
            className={greetingText}
          >
            Front-end developer
          </Typography>
          <Typography variant="h6">(ReactJS)</Typography>
        </div>
        <div className="intro-text">
          <Typography variant="body1">
            Hi! I'm {' '}
            <span style={{ color: "#cb6036" }}>Obiageli Maureen Ezeilo</span>
            .  An enthusiastic front-end developer based in Nigeria.
            Who believes in making the world a beautiful place with a beautiful website...
          </Typography>
          <MyButton
            endIcon={<CloudDownloadOutlinedIcon />}
            href="https://docs.google.com/document/d/1a8tOj2oiga0D14iPbPSV0STq1oVc6u8RhEeKE0pJOjU/edit?usp=sharing"
            value="Download resume"
            target="new"
            colorType="yellow"
          />
        </div>
        <div className="social-icons-container">
          <Button  className="social-icon" href="https://www.twitter.com/iam_Moween" target="new">
            <TwitterIcon />
          </Button>
          <Button className="social-icon" href="https://www.linkedin.com/in/obiageli-ezeilo/" target="new">
            <LinkedInIcon className="social-icon" />
          </Button>
          <Button className="social-icon" href="https://www.github.com/Moween" target="new">
            <GitHubIcon className="social-icon" />
          </Button>
        </div>
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
