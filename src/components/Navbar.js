import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink as Hlink} from 'react-router-hash-link';
import { Icon } from '@iconify/react';
import './Navbar.css'

function Navbar() {
  
  return (
    <div>
        <nav id           = "navbar">
          <ul className   = "navbar-ul">
            <li className = "navbar-li home-anchor"><Hlink to = '/#home' className    = "text-underlined"><Icon  className = "home-icon" icon = "tabler:letter-k" color = "black"/></Hlink></li>
            <li className = "navbar-li "><Link to             = '/about' className    = "about-anchor text-underlined">À propos</Link></li>
            <li className = "navbar-li"><Link to              = '/projects' className = "project-anchor text-underlined">Projets</Link></li>
            <li className = "navbar-li"><Hlink to             = '/#contact' className = "contact-anchor text-underlined">Contact</Hlink></li>
          </ul>
        </nav>
        <div id           = "sidebar">
        <a href="https://github.com/R3tt4h" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:github-fill"                             className= "github-icon"/>
          </a>
        </div>
    </div>
  );
}

export default Navbar;