import React from 'react'
import { useNavigate } from 'react-router';
import { Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faStackOverflow, faMedium} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
   
  const navigate = useNavigate()

  const usePathname = () => {
      const location = useLocation();
      return location.pathname;
    };

    return (
      <footer className="footer">
        <Link to={{pathname:"mailto:miguelangelxfm@gmail.com"}}
           className="icon-mail footer__link">
          <FontAwesomeIcon icon={faEnvelope}>
          </FontAwesomeIcon><br />
          miguelangelxfm@gmail.com
        </Link>
        <ul className="social-list">
            <li className="social-list__item social-list__link" >
            <Link /* onClick={ usePathname} */ to={{pathname:"#https://www.linkedin.com/in/mig82/"}}>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </Link>
            </li>
            <li className="social-list__item social-list__link">
            <Link to={{ pathname: "#https://github.com/mig82" }}>
             <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> 
          </Link>
            </li>
            <li className="social-list__item social-list__link">
          <Link to={{pathname:"#https://stackoverflow.com/users/4124574/mig82?tab=profile"}}>
            <FontAwesomeIcon icon={faStackOverflow}></FontAwesomeIcon>
          </Link>
            </li>
            <li className="social-list__item social-list__link ">
          <Link  to={{pathname:"#https://mig82.medium.com/"}}>
          <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
          </Link>
            </li>
        </ul>
      </footer>
    );
}

export default Footer
