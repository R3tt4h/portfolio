import './Footer.css'
import { Icon } from '@iconify/react';


function Footer() {
    return (
        <div className="footer">
            <a href="#about">
                <Icon icon="bi:arrow-up-circle-fill" className="logo-up-arrow"/>
            </a>
            <a href="https://github.com/R3tt4h" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:github-fill" className="logo-github"/>
            </a>
        </div>
    );
  }
  
  export default Footer;