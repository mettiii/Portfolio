import githubIcon from "../assets/Icon -GitHub.png";
import twitterIcon from "../assets/Icon - Twitter1.png";
import linkedinIcon from "../assets/Icon - Linkedin1.png";
import PropTypes from 'prop-types';

const currentDate = new Date();
const year = currentDate.getFullYear();
const name = "Meti Abera";

function Footer({ darkMode }) {
  return (
    <footer
      className={`fixed bottom-0 w-full text-center shadow-lg transition-colors duration-300  ${
        darkMode ? "bg-gray-900" : "bg-pink-300"
      }`}
    >
      <p className={`mb-2 ${darkMode && "text-white"}`}>Created by {name}</p>
      <hr />

      <ul className="flex space-x-4 justify-center pt-1">
        <li>
          <a
            href="https://twitter.com/Meti11642449?t=tfHR-_5gTDIqWDJqj5SNqg&s=35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mettiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub icon" className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://et.linkedin.com/in/meti-abera-80909b318"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" className="w-6 h-6" />
          </a>
        </li>
      </ul>
      <p className={`mb-2 ${darkMode && "text-white"}`}>
        Copyright © {year} Portifolio
      </p>
    </footer>
  );
}
Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default Footer;
