import Contact from "./ContactMeForm";
import githubIcon from "../assets/Icon -GitHub.png";
import twitterIcon from "../assets/Icon - Twitter1.png";
import linkedinIcon from "../assets/Icon - Linkedin1.png";
import PropTypes from "prop-types";
function ContactPage({ darkMode }) {
  return (
    <div className="h-screen">
      <Contact darkMode={darkMode} />
      <div className="flex space-x-4 mt-4 justify-center">
        <a
          href="https://twitter.com/Meti11642449?t=tfHR-_5gTDIqWDJqj5SNqg&s=35"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="Twitter icon" className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/mettiii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub icon" className="w-6 h-6" />
        </a>
        <a
          href="https://et.linkedin.com/in/meti-abera-80909b318"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn icon" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/meti-abera-80909b318"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn icon" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
ContactPage.propTypes = {
  darkMode: PropTypes.bool,
};

export default ContactPage;
