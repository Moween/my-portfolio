import React from "react";
import MyButton from "../MyButton";
import Typography from "@material-ui/core/Typography";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { useStyles } from "../../utils/styles";

const Project = (props) => {
  const { imgUrl, projectOverview, title, preview } = props.projectData;
  const {
    projectContainer,
    projectInfoCont,
    projectDetails,
    screenShot,
    projectInfo,
    imgBox,
  } = useStyles(props);

  return (
    <div className={projectContainer}>
      <article>
        <div className={projectInfoCont}>
          <div className={imgBox}>
            <img src={imgUrl} className={screenShot} alt="project" />
          </div>
          <div className={projectDetails}>
            <Typography variant="h4" component="h3">
              {title}
            </Typography>
            <Typography variant="body1" component="p" className={projectInfo}>
              {projectOverview}
            </Typography>
            <MyButton
              value="Live Preview"
              endIcon={<OpenInNewIcon />}
              href={preview}
              colorType="yellow"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;
