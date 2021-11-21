import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";

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
      whiteSpace: "pre",
      fontSize: "2rem",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  // Home Styles

  greetingText: {
    paddingTop: "0.625rem",
    wordSpacing: 20,
    letterSpacing: "7px",
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.5rem',
    },
  },
  introText: {
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
  },

  // About Styles

  bioInfo: {
    display: "block",
    width: "100%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "calc(50% - 50vw)",
      width: "100vw",
      position: "relative",
      opacity: 0.9,
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margintop: 20,
      paddingTop: 30,
    },
  },
  bio: {
    textAlign: "justify",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto",
      lineHeight: 1.5,
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      lineHeight: 2,
    },
  },
  aboutImgBox: {
    // boxShadow: "0 3px 10px rgb(50, 50, 50)",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
      width: "30%",
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#f7f124',
      borderTopRightRadius: '150px'
    },
  },
  personalImg: {
    width: '100%',
    display: "block",
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
    padding: '20px 0',
    marginBottom: "2rem",
  },
  projectInfoCont: {
    display: "block",
    position: "relative",
    [theme.breakpoints.up("md")]: {
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
    },

    // ProjectContainer Width Media Query
    [theme.breakpoints.up("xl")]: {
      width: (props) => {
        if (props.index % 2) {
          return "1092px";
        } else {
          return null;
        }
      },
    },
    [theme.breakpoints.only("lg")]: {
      width: (props) => {
        if (props.index % 2) {
          return "976px";
        } else {
          return null;
        }
      },
    },

    [theme.breakpoints.down("sm")]: {
      width: (props) => {
        if (props.index % 2) {
          return "88.5%";
        } else {
          return null;
        }
      },
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
    [theme.breakpoints.only("md")]: {
      padding: (props) => {
        if (props.index % 2) {
          return "30px 0";
        } else {
          return 30;
        }
      },
    },
    textAlign: "justify",
  },
  projectDetails: {
    [theme.breakpoints.up("md")]: {
      width: "45%",
      position: "static",
    },
  },
  projectTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      marginTop: "0.375rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.5rem",
    },
  },
  projectInfo: {
    padding: "1rem 0",
  },

  imgBox: {
    boxShadow: "0 2px 3px rgb(50, 50, 50)",
    [theme.breakpoints.down("sm")]: {
      // marginTop: '10px',
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      // marginTop: 0,
      width: "45%",
      height: "45%",
      borderRadius: "5px",
    },
  },
  screenShot: {
    maxWidth: "100%",
  },

  //Button Components Styles

  btn: {
    marginTop: "10px",
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
      return props.colorType === "yellow" ? "#000" : "#f7f124";
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
    height: "160px",
    justifyContent: "space-between",
    paddingLeft: "0.321rem",
    position: "relative",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "45%",
      marginBotton: 0,
    },
    [theme.breakpoints.only("md")]: {
      height: "185px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "150px",
    },
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "0.812rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.875rem",
    },
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

  //Footer
  footer: {
    width: '100%',
    height: '15vh',
    [theme.breakpoints.up('lg')]: {
      height: '10vh',
    },
    backgroundColor: '#0F0F0F'
  }
}));
