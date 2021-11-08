import './Footer.css'
import { Icon } from '@iconify/react';


function Footer() {
    return (
        <div className="footer">
            <a href="#home"><Icon className="arrow-up-icon" icon="dashicons:arrow-up-alt2" /></a>
            <div className="footer-copyright">
                <Icon className="copyright-icon" icon="fa-regular:copyright" />
                2021 - <a className="linkedin" href="https://www.linkedin.com/in/almeida-kevin/" target="_blank" rel="noreferrer">Kevin Almeida <Icon className="linkedin-icon" icon="entypo-social:linkedin-with-circle" /></a>
            </div>
        </div>
    );
  }
  
  export default Footer;