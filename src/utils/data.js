const projects = [
  {
    id: "pj-01",
    title: "Weather-App",
    projectOverview: `This is a weather-app built with react and open-weatherapp API that displays 
    the weather of a particular city inputted by the user.
    The HTTP request is being handled by axios...
    In case of an error react-toastify displays it`,
    preview: "https://orbie-weather-app.herokuapp.com/",
  },

  {
    id: "pj-02",
    title: "Todo-App",
    projectOverview: `I built this application with vanilla JavaScript, HTML, and CSS.
    The app allows a user to set tasks and save them in the Local Storage.
    I also implemented light and  dark theme feature.
     `,
    preview: "https://moween.github.io/active-todo/",
  },

  {
    id: "pj-03",
    title: "Rock-Paper-Scissors",
    projectOverview: `This application is a game built with vanilla JavaScript.`,
    preview: "https://moween.github.io/guess-game/",
  },

  {
    id: "pj-04",
    title: "Mo-Fashion-Store",
    projectOverview: `This is an ecommerce app  built with JavaScript, BootStrap, HTML and CSS.
    A user can add to cart, remove from cart and also go to each product page. 
    I  also implemented a payment feature using PayStack  API on this app.`,
    preview: "https://moween.github.io/mo-fashion-store/",
  },

  {
    id: "pj-05",
    title: "Etch-a-sketch",
    projectOverview: `This is a sketch board where a user can etch a sketch,
    erase sketch on every hover, and also toggle background theme. `,
    preview: "https://moween.github.io/etch-a-sketch",
  },
];

export const navItems = [
  {
    path: "#about",
    pathName: "About",
  },
  {
    path: "#projects",
    pathName: "Projects",
  },
  {
    path: "#achievement",
    pathName: "Achievement",
  },
  {
    path: "#article",
    pathName: "Article",
  },
  {
    path: "#contacts",
    pathName: "Contacts",
  },
];

export const certifications = [
  "Google Africa Developers Scholarship 2021",
  "FemCode Africa Front-End BootCamp June 2021",
  "FreeCodeCamp Web Design Certificate",
  "Lorem Ipsum dolor 2021",
];

export const articles = [
  {
    id: "art01",
    title: "JavaScript Loop Statement",
    intro: `When you hear loops, what image comes to your mind? 
      yeah, you! The popular loops cereal was the first for...`,
    coverImg: "",
    previewLink: "https://orbie.hashnode.dev/javascript-loop-statement",
  },
  {
    id: "art02",
    title: "Understanding JavaScript Variable Scope",
    intro: `If you are reading this article, you are reading my first article.
      As a newbie in JavaScript, the fundamental word I heard a lot was...`,
    coverImg: "",
    previewLink:
      "https://orbie.hashnode.dev/understanding-javascript-variable-scope",
  },
];

export default projects;
