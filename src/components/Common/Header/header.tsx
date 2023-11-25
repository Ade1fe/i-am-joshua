import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialIconsList from '../socialIconsList';
import './header.scss';

export default function Header() {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const toggleMenu = () => setIsClosed(!isClosed);

  return (
    <div id="header">
      <div className="header_wrapper">
        <div className="menu_btn_wrapper">
          <button className={isClosed ? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      {!isClosed && (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
              <NavLink
                  exact
                  to="/"
                  className={` ${location.pathname === '/' ? ' font-bold' : ''}`}
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
              <NavLink
                  exact
                  to="/resume"
                  className={` ${location.pathname === '/resume' ? ' font-bold' : ''}`}
                  onClick={toggleMenu}
                >
                  Résumé
                </NavLink>
              </li>
              <li>
              <NavLink
                  exact
                  to="/projects"
                  className={` ${location.pathname === '/projects' ? ' font-bold' : ''}`}
                  onClick={toggleMenu}
                >
                  Work
                </NavLink>
              </li>
              <li>
              <NavLink
                  exact
                  to="/blog"
                  className={` ${location.pathname === '/blog' ? ' font-bold' : ''}`}
                  onClick={toggleMenu}
                >
                  Blog
                </NavLink>
              </li>
            </ul>

            <div className="social_box">
              <h3>Get in Touch</h3>
              <a href="mailto:addypearl09@gmail.com" className="mt-4">
                LoremIpsum@gmail.com
              </a>
              <SocialIconsList cn="social_icons" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
