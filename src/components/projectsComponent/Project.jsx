import React from "react";
import Box from '@material-ui/core/Box';
import MyButton from "../MyButton";
import Typography from "@material-ui/core/Typography";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { useStyles } from "../../utils/styles";

const Project = (props) => {
  const { imgUrl } = props;
  const { projectOverview, title, preview } = props.projectData;
  const {
    projectContainer,
    projectInfoCont,
    projectDetails,
    projectTitle,
    screenShot,
    projectInfo,
    imgBox,
  } = useStyles(props);

  return (
    <Box className={projectContainer}>
      <Box component="article">
        <Box className={projectInfoCont}>
          <Box className={`${imgBox} floating-img`}>
            <img src={imgUrl} className={screenShot} alt="project" />
          </Box>
          <Box className={projectDetails}>
            <Typography variant="h4" component="h3" className={projectTitle}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
