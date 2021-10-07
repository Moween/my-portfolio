import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1140,
    },
  },
  typography: {
    h4: {
      fontFamily: `"Lobster", "Helvetica", "Arial", sans-serif`,
    }
  },
  palette: {
    primary: {
      main: '#ffff00',
    },
  },
})

export const useStyles = makeStyles((theme) => ({
  // About Styles
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
  // Achievement Styles
  certList: {
    marginTop: '4rem',
  },
  list: {
    width: '70%',
    margin: 'auto',
  },
  listItem:  {
    borderBottom:  '1px solid #fff', 
  },
  listText: {
    padding: '1rem',
    color: '#ffffff',
    '&:hover': {
      animation: 'bounce .3s ease 0s alternate',      
    },
  },
  // Project Styles
  section: {
    // height: '65vh',
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
    // margintop: 20,
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
    height: '45%',
    maxWidth: '100%',
    borderRadius: '5px'
  },
  screenShot: {
    width: '100%',
  },

  //Button Components Styles
  btn: {
    padding: '0.43rem',
    // justifyContent: 'space-between',
    textTransform: 'capitalize',
    width: (props) => {
      if (props.colorType === 'yellow') {
        return '180px';
      }
    },
    backgroundColor: (props) => {
      if (props.colorType === 'yellow') {
        return '#f7f124';
      }
    },
    transition: (props) => {
      if (props.colorType === 'yellow') {
        return 'backgroundColor 2s ease 1s';
      }
      return null;
    },
    transitionTimingFunction: 'ease',
    transitionDelay: '1s',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
      border: '1px solid #f7f124',
    },
  },

  // Article Styles
  card: {
    alignItems: 'center',
    backgroundColor: '#212121',
    borderRadius: '0.3rem',
    boxShadow: '1px 2px 3px rgb(50, 50, 50)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '0.5rem',
    height: '150px',
    justifyContent: 'space-between',
    padding: '1rem 0.321rem',
    position: 'relative',
    width: '45%'
  },
  cardMedia: {
    width: '35%',
  },
  rightBorder: {
    borderRight: '4px solid #fff',
    height: 100,
    margin: 2,
    opacity: 0.5,
    width: '5%',
  },
  cardContent: {
    width: '40%',
  },
  title: {
    fontSize: '0.875rem',
    fontWeight: 'bold'
  },
  intro: {
    textAlign: 'justify',
    padding: '0.25rem',
    fontSize: '0.75rem'
  },
  articleBtn: {
    bottom: '5%',
    position: 'absolute',
    right: '5%',
  }
}));