import React from "react";
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
  const { greetingText } = useStyles;
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
          <Typography variant="h5" >
            (ReactJS)
          </Typography>
          </Typography>
        </div>
        <div className="intro-text">
          <Typography variant="body1">
            Hi! I'm {' '}
            <Typography
              variant="body1"
              style={{ color: "#cb6036" }}
              component="span"
              >
              Maureen Ezeilo
            </Typography>
            .  An enthusiastic front-end developer based in Nigeria.
            Who believes in making the world a beautiful place with a beautiful website...
          </Typography>
          <MyButton
            endIcon={<CloudDownloadOutlinedIcon />}
            href="#"
            value="Download resume"
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
