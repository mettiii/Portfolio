import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
function ProjectPage(props) {
  const {
    darkMode,
    title,
    description,
    link,
    handleLike,
    currentIndex,
    likes,
  } = props;

  return (
    <div
      className={`h-max border p-4 rounded mx-auto transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-white" : "bg-pink-100 text-black"
      }`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        className={`hover:underline ${
          darkMode ? "bg-gray-700 text-gray-400" : "bg-pink-100 text-pink-500"
        }`}
      >
        View Project
      </a>
      <button onClick={handleLike} className="mt-2 flex items-center">
        <FaHeart />
        <span className="ml-2">{likes[currentIndex]}</span>
      </button>
    </div>
  );
}
ProjectPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  handleLike: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  likes: PropTypes.bool.isRequired,
};

export default ProjectPage;
