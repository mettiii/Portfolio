import { useState } from "react";
import PropTypes from "prop-types";

function Header({ toggleDarkMode, darkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Repositories", href: "#repositories" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav
        className={`relative p-4 shadow-xl transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className="flex items-center"
            aria-label="Go to home section"
          ></a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="flex items-center rounded bg-gray-700/70 p-2 text-white transition hover:bg-gray-600"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.66-9.24l-.87.5m-14.8 0l-.87-.5m11.39-6.24a9 9 0 11-11.62 11.62a9 9 0 0111.62-11.62z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
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
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="ml-1 rounded p-2 text-white focus:outline-none md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
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
        </div>

        <ul
          className={`mt-4 flex-col space-y-3 md:mt-0 md:flex md:flex-row md:items-center md:space-x-5 md:space-y-0 ${
            isMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={handleNavClick}
                className="block text-sm font-medium text-white transition hover:underline md:text-base"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
};

export default Header;
