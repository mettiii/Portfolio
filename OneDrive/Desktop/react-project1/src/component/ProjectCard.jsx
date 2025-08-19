import { useState, useEffect } from "react";
import ProjectPage from "./ProjectPage";
import projects from "../projects";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

function ProjectCard({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState(Array(projects.length).fill(0));
  const [isHovered, setIsHovered] = useState(false);
  const { ref } = useInView({ threshold: 0.1 });

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleLike = () => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[currentIndex] += 1;
      return newLikes;
    });
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextProject, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className={`h-auto container mx-auto p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-pink-200 text-black"
      }`}
    >
      <h2 className="mt-16 text-2xl font-bold mb-6 pt-20">My Projects</h2>
      <div
        ref={ref}
        className="relative rounded-lg shadow-md p-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          key={projects[currentIndex].key}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ProjectPage
            title={projects[currentIndex].title}
            description={projects[currentIndex].description}
            link={projects[currentIndex].link}
            darkMode={darkMode}
            handleLike={handleLike}
            currentIndex={currentIndex}
            likes={likes}
          />
        </motion.div>
        <button
          onClick={prevProject}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-pink-100 text-black"
          }`}
        >
          Prev
        </button>
        <button
          onClick={nextProject}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-pink-100 text-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
ProjectCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default ProjectCard;
