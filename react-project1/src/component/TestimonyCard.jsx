import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonyPage from "./TestimonyPage";
import testimonies from "../testimonies";
import PropTypes from "prop-types";

function TestimonyCard({ darkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextTestimony, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className={`container mx-auto p-6 transition-colors duration-300  ${
        darkMode ? "bg-gray-800 text-white" : "bg-pink-200 text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-6">Testimonies</h2>
      <div
        className="relative rounded-lg shadow-md transition-transform transform p-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          key={testimonies[currentIndex].key}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <TestimonyPage
            image={testimonies[currentIndex].img}
            name={testimonies[currentIndex].name}
            quote={testimonies[currentIndex].quote}
            darkMode={darkMode}
            currentIndex={currentIndex}
          />
        </motion.div>

        <button
          onClick={prevTestimony}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-pink-100 text-black"
          }`}
        >
          Prev
        </button>
        <button
          onClick={nextTestimony}
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
TestimonyCard.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default TestimonyCard;
