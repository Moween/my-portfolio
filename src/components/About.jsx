import React from "react";
import { useTheme } from "@material-ui/styles"; // For mediaquery
import Typography from "@material-ui/core/Typography";
import img from "../images/personal_img.jpeg";
import HeadingText from './HeadingText';
import { useStyles } from "../utils/styles";

const About = () => {
  const theme = useTheme();
  const {
    bioInfo,
    bio,
    aboutImgBox,
    personalImg,
  } = useStyles(theme);
  return (
    <section id="about" className="about-section">
      <article>
        <HeadingText text="About me" />
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
          <div className={aboutImgBox}>
            <img src={img} className={personalImg} alt="Maureen" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
