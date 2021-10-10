import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import bgImg from '../images/personal_img.jpeg'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 992,
      xl: 1140,
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
    primary: {
      main: "#ffff00",
    },
  },
  components: {
    MuiFormControlRoot: {
      display: "block",
    },
    MuiOutlinedInput: {
      padding: "10px",
    },
    MuiTypographyBody1: {
      whiteSpace: 'pre',
      fontSize: '2rem'
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  // Home Styles
  greetingText: {
    [theme.typography.h1.fontSize]: {
      fontSize: "20rem",
      lineHeight: "1.5rem",
    },
    paddingTop: "0.625rem",
    wordSpacing: 20,
    letterSpacing: "7px",
    [theme.breakpoints.up("md")]: {
    },
  },
  introText: {
    [theme.breakpoints.down("md")]: {
      width: '70%',
    },
  },  

  

  // About Styles
  bioInfo: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: 'calc(50% - 50vw)',
      width: '100vw',
      position: 'relative',
      backgroundImage: `url('${bgImg}')`,
      backgroundRepeat: 'no repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      opacity: 0.7,
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      margintop: 20,
      paddingTop: 30,
    },
  },
  bio: {
    textAlign: 'justify',
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: '90%',
      margin: '0 auto',
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  avatarContainer: {
    display: 'none',
    [theme.breakpoints.only("md")]: {
      display: 'block',
    },
  },
  avatarImg: {
    float: 'right',
    width: '250px',
    height: '250px',
    borderColor: '#f7f124',
    borderStyle: 'solid',
    borderRadius: '50%',
    borderWidth: 4,
  },  
  aboutImgBox: {
    boxShadow: "0 3px 10px rgb(50, 50, 50)",
    [theme.breakpoints.down("md")]: {
      display: 'none',
    },
    [theme.breakpoints.up("lg")]: {
      display: 'block',
      width: "40%",
    },
  },
  personalImg: {
    display: 'block',
    maxWidth: "100%",
    height: "350px",
  },
  // Achievement Styles
  certList: {
    marginTop: "4rem",
  },
  list: {
    width: "70%",
    margin: "auto",
  },
  listItem: {
    borderBottom: "1px solid #fff",
  },
  listText: {
    padding: "1rem",
    color: "#ffffff",
    "&:hover": {
      animation: "bounce .3s ease 0s alternate",
    },
  },
  // Project Styles
  projectContainer: {
    // height: '65vh',
    position: "relative",
    width: (props) => {
      if (props.index % 2) {
        return "100vw";
      } else {
        return null;
      }
    },
    marginLeft: (props) => {
      if (props.index % 2) {
        return "calc(50% - 50vw)";
      } else {
        return null;
      }
    },
    backgroundColor: (props) => {
      if (props.index % 2) {
        return "#212121";
      } else {
        return null;
      }
    },
    marginBottom: "2rem",
  },
  projectInfoCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: (props) => {
      if (props.index % 2) {
        return "row-reverse";
      } else {
        return "row";
      }
    },
    width: (props) => {
      if (props.index % 2) {
        return "84.5vw";
      } else {
        return null;
      }
    },
    marginLeft: (props) => {
      if (props.index % 2) {
        return "auto";
      } else {
        return null;
      }
    },
    marginRight: (props) => {
      if (props.index % 2) {
        return "auto";
      } else {
        return null;
      }
    },
    // margintop: 20,
    padding: 30,
    textAlign: "left",
  },
  projectDetails: {
    width: "45%",
  },
  projectInfo: {
    padding: "1rem 0",
  },

  imgBox: {
    boxShadow: "0 2px 3px rgb(50, 50, 50)",
    width: "45%",
    height: "45%",
    maxWidth: "100%",
    borderRadius: "5px",
  },
  screenShot: {
    width: "100%",
  },

  //Button Components Styles
  btn: {
    marginTop: '10px',
    padding: "0.43rem",
    textTransform: "capitalize",
    width: (props) => {
      if (props.colorType === "yellow") {
        return "180px";
      }
    },
    backgroundColor: (props) => {
      return props.colorType === "yellow" ? "#f7f124" : "#000";
    },
    color: (props) => {
      return props.colorType === "yellow" ? '#000' : '#f7f124'
    },
    transition: (props) => {
      return props.colorType === "yellow"
        ? "backgroundColor 2s ease 1s"
        : "backgroundColor 2s ease 1s";
    },
    transitionTimingFunction: "ease",
    transitionDelay: "1s",
    "&:hover": {
      backgroundColor: (props) => {
        return props.colorType === "yellow" ? "#000" : "#f7f124";
      },
      color: (props) => {
        return props.colorType === "yellow" ? "#fff" : "#000";
      },
      border: (props) => {
        return props.colorType === "yellow"
          ? "1px solid #f7f124"
          : "1px solid #000";
      },
    },
  },
  // Article Styles
  card: {
    alignItems: "center",
    backgroundColor: "#212121",
    borderRadius: "0.3rem",
    boxShadow: "1px 2px 3px rgb(50, 50, 50)",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    fontSize: "0.5rem",
    height: "150px",
    justifyContent: "space-between",
    padding: "1rem 0.321rem",
    position: "relative",
    width: "45%",
  },
  cardMedia: {
    width: "35%",
  },
  rightBorder: {
    borderRight: "4px solid #fff",
    height: 100,
    margin: 2,
    opacity: 0.5,
    width: "5%",
  },
  title: {
    fontSize: "0.875rem",
    fontWeight: "bold",
  },
  intro: {
    textAlign: "justify",
    padding: "0.25rem",
    fontSize: "0.75rem",
  },
  articleBtn: {
    bottom: "5%",
    position: "absolute",
    right: "5%",
  },
}));
