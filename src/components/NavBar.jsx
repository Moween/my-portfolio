import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/styles";

const myNavBar = (props) => {
  const { showMenu, toggleMenu } = props;
  return (
    <div>
      <div className="menu">
        <div className="menu-btn" onClick={toggleMenu}>
          <div
            className={showMenu ? "menu-btn__burger open" : "menu-btn__burger"}
          ></div>
        </div>
        <nav className={showMenu ? "navbar open" : "navbar"}>
          <ul className={showMenu ? "menu-nav open" : "menu-nav"}>
            <li className="menu-nav__item">
              {/* <a href="#about" className="menu-nav_link">
                About
              </a> */}
              <Link to="#about" className="menu-nav_link">
                About
              </Link>
            </li>
            <li className="menu-nav__item">
              <a href="#projects" className="menu-nav_link">
                Projects
              </a>
            </li>
            <li className="menu-nav__item">
              <a href="#achievements" className="menu-nav_link">
                Achievements
              </a>
            </li>
            <li className="menu-nav__item">
              <a href="#article" className="menu-nav_link">
                Article
              </a>
            </li>
            <li className="menu-nav__item">
              <a href="#contact" className="menu-nav_link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const NavBar = styled(myNavBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "40%",
  },
}));

export default NavBar;
