import React from "react";
import { navItems } from '../data';
import { NavLink } from "react-router-dom";
import { styled } from "@material-ui/styles";

const myNavBar = (props) => {
  const { showMenu, toggleMenu } = props;  
  return (
    <>
      <div className="menu">
        <div className="menu-btn" onClick={toggleMenu}>
          <div
            className={showMenu ? "menu-btn__burger open" : "menu-btn__burger"}
          ></div>
        </div>
        <nav className={showMenu ? "navbar open" : "navbar"}>
          <ul className={showMenu ? "menu-nav open" : "menu-nav"}>
            {navItems.map((link) => {
              return (
                <li className="menu-nav__item">
                  <NavLink to={`/${link.path}`} className="menu-nav_link">
                    {link.pathName}
                  </NavLink>
                </li>
              );
            })}            
          </ul>
        </nav>
      </div>
    </>
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
