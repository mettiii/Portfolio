import Contact from "./ContactMeForm";
import PropTypes from "prop-types";
function ContactPage({ darkMode }) {
  return (
    <div className={`h-screen ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white" : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"}`}>
      <Contact darkMode={darkMode} />
     
    </div>
  );
}
ContactPage.propTypes = {
  darkMode: PropTypes.bool,
};

export default ContactPage;
