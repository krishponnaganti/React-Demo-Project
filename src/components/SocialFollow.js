import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
const SocialFollow = () => {
  return (
    <>
      <div className="social-container">
        
        <a
          href="https://www.linkedin.com/in/ramakrishna-ponnaganti-91161966/"
          className="youtube social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          href="https://twitter.com/Krishponnaganti"
          className="twitter social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://github.com/krishponnaganti"
          className="twitter social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://codepen.io/krishponnaganti/"
          className="twitter social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </a>
      </div>
    </>
  );
};
export default SocialFollow;
