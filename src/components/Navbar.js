import React from 'react';
import {HashLink as Hlink} from 'react-router-hash-link';
import { Icon } from '@iconify/react';
import './Navbar.css'
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  
  return (
    <div>
      <nav id = "navbar">
        <ul className = "navbar-ul">
          <li className = "navbar-li home-anchor">
            <Hlink to = '/#home' className = "text-underlined">
              <Icon className = "home-icon" icon = "tabler:letter-k"/>
            </Hlink>
          </li>
          <li className = "navbar-li ">
            <Hlink to = '/#about' className = "about-anchor text-underlined">
              À propos
            </Hlink>
          </li>
          <li className = "navbar-li">
            <Hlink to = '/#project' className = "project-anchor text-underlined">
              Projets
            </Hlink>
          </li>
          <li className = "navbar-li">
            <Hlink to = '/#contact' className = "contact-anchor text-underlined">
              Contact
            </Hlink>
          </li>
          <li className="toggle">
            <DarkModeToggle/>
          </li>
        </ul>
      </nav>
      <div id = "sidebar">
        <a href="https://github.com/R3tt4h" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:github-fill" className= "github-icon"/>
        </a>
      </div>
    </div>
  );
}

export default Navbar;