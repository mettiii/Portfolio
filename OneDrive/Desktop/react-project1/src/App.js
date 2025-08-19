import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./component/HomePage.jsx";
import About from "./component/AboutSection.jsx";
import Footer from "./component/Footer.jsx";
import ContactPage from "./component/ContactPage.jsx";
import Header from "./component/Header.jsx";
import ProjectCard from "./component/ProjectCard.jsx";
import GitHubRepos from "./component/Repository.jsx";
import PropTypes from "prop-types";

const AppContent = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-700 text-white h-screen"
          : "bg-pink-100 text-black h-screen"
      }`}
    >
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route path="/about-page" element={<About darkMode={darkMode} />} />
        <Route path="/projects" element={<ProjectCard darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        <Route
          path="/repositories"
          element={<GitHubRepos darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
};
AppContent.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <AppContent darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </Router>
  );
}

export default App;
