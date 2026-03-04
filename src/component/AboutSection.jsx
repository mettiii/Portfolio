import Skill from "./Skills";
import TestimonyCard from "./TestimonyCard";
import { FaLaptopCode, FaUsers, FaLightbulb, FaRegSmile } from "react-icons/fa"; //fa-font Awesome
import myImage from "../assets/me1.jpg";
import PropTypes from "prop-types";
function About({ darkMode }) {
  return (
    <div
      className={`h-auto overflow-y-auto p-6 rounded-lg shadow-lg transition-colors duration-300 text-lg ${
        darkMode ? "bg-gray-700 text-white" : "bg-sky-100 text-black"
      }`}
    >
      <h1 className="mt-36 text-3xl font-bold mb-4 text-center">About Me</h1>
      <div className="p-4 flex justify-center">
        <img
          src={myImage}
          alt="Meti's picture"
          className="w-40 h-40 md:w-96 md:h-96 rounded-full object-cover "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode ? "bg-gray-800 text-white" : "bg-sky-200 text-black"
          }`}
        >
          <FaRegSmile className="absolute top-4 left-4 text-5xl text-white" />
          <p className={`p-10 pb-5 `}>
            Hi, I&apos;m Meti Abera, a dedicated Information Systems student at
            Addis Ababa University. My academic journey has been both enriching
            and transformative, and I am passionate about leveraging technology
            to solve real-world problems.
          </p>
          <p className={`px-10 `}>
            Over the past four semesters, I’ve had the privilege of learning
            from experienced instructors who have inspired me to think
            critically and innovate.
          </p>
        </div>

        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode ? "bg-gray-800 text-white" : "bg-sky-200 text-black"
          }`}
        >
          <FaLaptopCode className="absolute top-4 left-4 text-5xl text-white" />

          <p className={`p-10 pb-5`}>
            Throughout my studies, I have been actively involved in various
            semester projects focused on developing user-centered applications.
          </p>
          <p className={`px-10 `}>
            In addition to this I was able to be part of an Odoo based exam
            management system project where I was able to learn a new framework
            in a short time and contribute to the project. These experiences
            have not only honed my technical skills but also taught me the
            importance of teamwork and effective communication in achieving
            project goals.
          </p>
        </div>

        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode ? "bg-gray-800 text-white" : "bg-sky-200 text-black"
          }`}
        >
          <FaUsers className="absolute top-4 left-4 text-5xl text-white" />
          <p className={`p-10 `}>
            I thrive in collaborative environments and enjoy brainstorming ideas
            with peers. My exposure to various facets of Information Science has
            equipped me with a solid foundation in programming, database
            management, and web development.
          </p>
          <p className={`px-10 `}>
            I am particularly interested in software development and networking
            and I am keen to expand my skills in these areas.
          </p>
        </div>

        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode ? "bg-gray-800 text-white" : "bg-sky-200 text-black"
          }`}
        >
          <FaLightbulb className="absolute top-4 left-4 text-5xl text-white" />
          <p className={`p-10`}>
            As I progress in my studies, I am excited about opportunities to
            contribute to meaningful projects and make an impact in the tech
            industry. My background and enthusiasm for learning position me well
            for a successful career in Information Science.
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={() =>
            window.open("https://flowcv.com/resume/d1hsodn7jpcs", "_blank")
          }
          className={`mt-6 px-4 py-2 rounded-xl align-center shadow-lg border-l-cyan-800 ${
            darkMode ? "bg-gray-800 text-white" : "bg-sky-200 text-black"
          }`}
        >
          View My Resume
        </button>
      </div>
      <div className="mt-6">
        <Skill darkMode={darkMode} />
        <TestimonyCard darkMode={darkMode} />
      </div>
      <div className="h-24"></div>
    </div>
  );
}
About.propTypes = {
  darkMode: PropTypes.bool,
};

About.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};
export default About;
