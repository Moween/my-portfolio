import React from 'react';
import MyButton from '../MyButton';
import Typography from '@material-ui/core/Typography';
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '65vh',
    position: 'relative',
    width: (props) => {
      if(props.index % 2) {
        return '100vw';
      }else {
        return null;
      }
    },
    marginLeft: (props) => {
      if(props.index % 2) {
        return 'calc(50% - 50vw)';
      }else {
        return null;
      }
    },
    backgroundColor: (props) => {
      if(props.index % 2) {
        return '#212121';
      }else {
        return null;
      }
    },
    marginBottom: '2rem',
  },
  projectInfoCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection : (props) => {
      if(props.index % 2) {
        return 'row-reverse';
      }else {
        return 'row';
      }
    },
    width: (props) => {
      if(props.index % 2) {
        return '84.5vw';
      }else {
        return null;
      }
    },
    marginLeft: (props) => {
      if(props.index % 2) {
        return 'auto';
      }else {
        return null;
      }
    },
    marginRight: (props) => {
      if(props.index % 2) {
        return 'auto';
      }else {
        return null;
      }
    },
    margintop: 20,
    padding: 30,
    textAlign: 'left'
  },
  projectDetails: {
    width: '45%',
  },
  projectInfo: {
    padding: '1rem 0',
  },

  imgBox: {
    boxShadow: '0 2px 3px rgb(50, 50, 50)',
    width: '45%',
    borderRadius: '5px'
  },
  screenShot: {
    width: '100%',
    height: '350px',
  },
}));


const Project = (props) => {
  const { imgUrl, projectOverview, title, preview } = props.projectData;
  const {  section, projectInfoCont, projectDetails, screenShot, projectInfo, imgBox } = useStyles(props);
  
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
              <MyButton
                value="Live Preview"
                endIcon={<OpenInNewIcon />}
                href={preview}
                colorType="yellow"
              />
            </div>
          </div>
      </article>
    </section>
  );
}

export default Project;
