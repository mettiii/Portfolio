import { useState } from "react";

import HomePage from "./component/HomePage.jsx";
import About from "./component/AboutSection.jsx";
import Footer from "./component/Footer.jsx";
import ContactPage from "./component/ContactPage.jsx";
import Header from "./component/Header.jsx";
import GitHubRepos from "./component/Repository.jsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AppContent = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen pt-24 ${
        darkMode
          ? "bg-gradient-to-r from-gray-950 via-slate-900 to-gray-950 text-white"
          : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
      }`}
    >
      <section id="home" className="scroll-mt-24 my-12">
        <HomePage darkMode={darkMode} />
      </section>
      <section id="about" className="scroll-mt-24 my-12">
        <About darkMode={darkMode} />
      </section>
      <section id="repositories" className="scroll-mt-24 my-12">
        <GitHubRepos darkMode={darkMode} />
      </section>
      <section id="contact" className="scroll-mt-24 my-12">
        <ContactPage darkMode={darkMode} />
      </section>
      <Footer darkMode={darkMode} />
    </motion.div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <AppContent darkMode={darkMode} />
    </>
  );
}

AppContent.propTypes = {
  darkMode: PropTypes.bool,
};

export default App;
