import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    h2: {
      fontFamily: `"Lobster", "Helvetica", "Arial", sans-serif`,
    },
    h3: {
      fontFamily: `"Lobster", "Helvetica", "Arial", sans-serif`,
    },
  },
  palette: {
    background: {
      paper: '#dcab07',
    },
    primary: {
      main: '#dcab07',
    },
    secondary: {
      main: '#000',
    },
  },
  components: {
    MuiFormControlRoot: {
      display: 'block',
    },
    MuiOutlinedInput: {
      padding: '10px',
    },
    MuiTypographyBody1: {
      whiteSpace: 'pre',
      fontSize: '2rem',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  // Brand Logo
  brandLogo: {
    width: '25%',
  },
  brandLogoText: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#dcab07',
    },
  },
  // Home Styles

  greetingText: {
    paddingTop: '0.625rem',
    wordSpacing: 20,
    letterSpacing: '7px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  introText: {
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
  },

  // About Styles

  bioInfo: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: 'calc(50% - 50vw)',
      width: '100vw',
      position: 'relative',
      opacity: 0.9,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margintop: 20,
      paddingTop: 30,
    },
  },
  bio: {
    textAlign: 'justify',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      // textAlign: 'center',
      width: '90%',
      margin: '0 auto',
      lineHeight: 2.5,
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      lineHeight: 2,
    },
  },
  aboutImgBox: {
    // boxShadow: "0 3px 10px rgb(50, 50, 50)",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      width: '35%',
      borderStyle: 'solid',
      borderWidth: '5px',
      borderColor: '#dcab07',
      borderRadius: '5px',
      borderTopRightRadius: '50px',
      borderBottomLeftRadius: '50px',
    },
  },
  personalImg: {
    width: '100%',
    display: 'block',
    maxWidth: '100%',
    height: '350px',
    borderTopRightRadius: '50px',
    borderBottomLeftRadius: '50px',
  },

  // Achievement Styles
  list: {
    width: '70%',
    margin: 'auto',
  },
  listItem: {
    borderBottom: '1px solid #fff',
    textAlign: 'center',
  },
  listText: {
    padding: '1rem',
    color: '#ffffff',
  },

  // Project Styles

  projectContainer: {
    position: 'relative',
    [theme.breakpoints.only('xl')]: {
      height: '70vh',
    },
    width: (props) => {
      if (props.index % 2) {
        return '100vw';
      } else {
        return null;
      }
    },
    marginLeft: (props) => {
      if (props.index % 2) {
        return 'calc(50% - 50vw)';
      } else {
        return null;
      }
    },
    backgroundColor: (props) => {
      if (props.index % 2) {
        return '#212121';
      } else {
        return null;
      }
    },
    padding: '20px 0',
    marginBottom: '2rem',
  },
  projectInfoCont: {
    display: 'block',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: (props) => {
        if (props.index % 2) {
          return 'row-reverse';
        } else {
          return 'row';
        }
      },
    },

    // ProjectContainer Width Media Query
    [theme.breakpoints.up('xl')]: {
      width: (props) => {
        if (props.index % 2) {
          return '1092px';
        } else {
          return null;
        }
      },
    },
    [theme.breakpoints.only('lg')]: {
      width: (props) => {
        if (props.index % 2) {
          return '976px';
        } else {
          return null;
        }
      },
    },

    [theme.breakpoints.down('sm')]: {
      width: (props) => {
        if (props.index % 2) {
          return '88.5%';
        } else {
          return null;
        }
      },
    },
    width: (props) => {
      if (props.index % 2) {
        return '84.5vw';
      } else {
        return null;
      }
    },
    marginLeft: (props) => {
      if (props.index % 2) {
        return 'auto';
      } else {
        return null;
      }
    },
    marginRight: (props) => {
      if (props.index % 2) {
        return 'auto';
      } else {
        return null;
      }
    },
    [theme.breakpoints.only('md')]: {
      padding: (props) => {
        if (props.index % 2) {
          return '30px 0';
        } else {
          return 30;
        }
      },
    },
    textAlign: 'justify',
  },
  projectDetails: {
    [theme.breakpoints.up('md')]: {
      width: '45%',
      position: 'static',
    },
  },
  projectTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      marginTop: '0.375rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.5rem',
    },
  },
  projectInfo: {
    padding: '1rem 0',
  },

  imgBox: {
    boxShadow: '0 2px 3px rgb(50, 50, 50)',
    [theme.breakpoints.down('sm')]: {
      // marginTop: '10px',
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      // marginTop: 0,
      width: '45%',
      height: '45%',
      borderRadius: '5px',
    },
  },
  screenShot: {
    maxWidth: '100%',
  },

  //Button Components Styles

  btn: {
    marginTop: '10px',
    padding: '0.43rem',
    textTransform: 'capitalize',
    width: (props) => {
      if (props.colorType === 'yellow') {
        return '180px';
      }
    },
    backgroundColor: (props) => {
      return props.colorType === 'yellow' ? '#dcab07' : '#000';
    },
    color: (props) => {
      return props.colorType === 'yellow' ? '#000' : '#dcab07';
    },
    transition: (props) => {
      return props.colorType === 'yellow'
        ? 'backgroundColor 2s ease 1s'
        : 'backgroundColor 2s ease 1s';
    },
    transitionTimingFunction: 'ease',
    transitionDelay: '1s',
    '&:hover': {
      backgroundColor: (props) => {
        return props.colorType === 'yellow' ? '#000' : '#dcab07';
      },
      color: (props) => {
        return props.colorType === 'yellow' ? '#fff' : '#000';
      },
      border: (props) => {
        return props.colorType === 'yellow'
          ? '1px solid #dcab07'
          : '1px solid #000';
      },
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
    height: '160px',
    justifyContent: 'space-between',
    paddingLeft: '0.321rem',
    position: 'relative',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      width: '45%',
      marginBotton: 0,
    },
    [theme.breakpoints.only('md')]: {
      height: '185px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '150px',
    },
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
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '0.812rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '0.875rem',
    },
    fontWeight: 'bold',
  },
  intro: {
    textAlign: 'justify',
    padding: '0.25rem',
    fontSize: '0.75rem',
  },
  articleBtn: {
    bottom: '5%',
    position: 'absolute',
    right: '5%',
  },

  contactCard: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between',
    [theme.breakpoints.down(600)]: {
      width: '100%',
      marginBottom: '0.875rem',
      padding: '0.3rem',
    },
    [theme.breakpoints.between(601, 'md')]: {
      width: '40%',
      '&:last-of-type': {
        margin: '0.5rem auto',
      },
    },
    [theme.breakpoints.up('md')]: {
      '&:last-of-type': {
        margin: '0.5rem auto',
      },
      width: '45%',
    },
    [theme.breakpoints.up(1024)]: {
      '&:last-of-type': {
        margin: 'unset',
      },
      width: '30%',
    },
  },

  contactCardInfo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  hireBtn: {
    [theme.breakpoints.down('sm')]: {
      width: '70%',
      marginTop: '0.5rem',
      padding: '0.3rem 1rem',
    },
    [theme.breakpoints.between('md', 1024)]: {
      marginTop: '1rem',
      width: '40%',
    },
    marginTop: '3rem',
    backgroundColor: '#000',
    padding: '0.5rem 1rem',
    color: '#dcab07',
    textTransform: 'capitalize',
    width: '20%',
  },

  //Footer
  footer: {
    width: '100%',
    height: '15vh',
    [theme.breakpoints.up('lg')]: {
      height: '10vh',
    },
  },
}));
