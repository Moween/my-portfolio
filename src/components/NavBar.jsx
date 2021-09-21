import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="menu-nav">
        <li className="menu-nav__item">
          <a href="#about" className="menu-nav_link">
            About
          </a>
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
  );
};

export default NavBar;
