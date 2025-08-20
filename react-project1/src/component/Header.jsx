import { useState } from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/A.png";
import PropTypes from "prop-types";

function Header({ toggleDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 p-4 transition-colors duration-300 z-50 ${
        darkMode ? "bg-gray-900" : "bg-pink-300"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={myLogo}
            alt="Logo"
            className="w-12 h-12 object-cover mr-2 ml-4 "
          />
        </div>

        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded bg-gray-700 text-white flex items-center"
          >
            {darkMode ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m8.66-9.24l-.87.5m-14.8 0l-.87-.5m11.39-6.24a9 9 0 11-11.62 11.62 9 9 0 0111.62-11.62z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 1a11 11 0 100 22 11 11 0 000-22z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="sm:block md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`flex-col md:flex md:flex-row md:space-x-4 mt-4 ml-auto ${
            isMenuOpen ? "flex" : "hidden"
          } md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className={`hover:underline ${darkMode && "text-white"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-page"
              className={`hover:underline ${darkMode && "text-white"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`hover:underline ${darkMode && "text-white"}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`hover:underline ${darkMode && "text-white"}`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/repositories"
              className={`hover:underline ${darkMode && "text-white"}`}
            >
              Repository
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
