import React from 'react';
import MyButton from '../MyButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '100vh',
  },
  projectInfoCont: {
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-between",
    margintop: 20,
    paddingTop: 30,
    textAlign: 'left'
  },
  projectDetails: {
    width: '45%',
  },
  projectInfo: {
    padding: '1rem 0',
  },

  imgBox: {
    boxShadow: '0 3px 10px rgb(50, 50, 50)',
    width: '45%',
  },
  screenShot: {
    width: '100%',
    height: "350px",
  },
}));


const Project = ({ projectData }) => {
  const { imgUrl, projectOverview, title, preview } = projectData;
  const {  section, projectInfoCont, projectDetails, screenShot, projectInfo, imgBox } = useStyles();
  
  return (
    <section className={section}>
      <article>
          <div className={projectInfoCont}>
            <div className={imgBox}>
              <img src={imgUrl} className={screenShot} alt="project" />
            </div>
            <div className={projectDetails}>
              <Typography variant="h4" component="h3">{title}</Typography>
              <Typography variant="body1" component="p" className={projectInfo}>
                {projectOverview}
              </Typography>
              <MyButton value="Go to site" href={preview} />
            </div>
          </div>
      </article>
    </section>
  );
}

export default Project;
