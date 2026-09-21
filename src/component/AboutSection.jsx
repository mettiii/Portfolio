import Skill from "./Skills";
// import TestimonyCard from "./TestimonyCard";
import {
  FaFileAlt,
  FaLaptopCode,
  FaUsers,
  FaLightbulb,
  FaRegSmile,
} from "react-icons/fa"; //fa-font Awesome
import myImage from "../assets/me1.jpg";
import PropTypes from "prop-types";
function About({ darkMode }) {
  return (
    <div
      className={`h-auto overflow-y-auto p-6 rounded-lg shadow-lg transition-colors duration-300 text-lg ${
        darkMode
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
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
      <div>
        <button
          onClick={() =>
            window.open("https://flowcv.com/resume/d1hsodn7jpcs", "_blank")
          }
          className={`m-6 px-4 py-2 rounded-xl align-center shadow-lg border-l-cyan-800 ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
          }`}
        >
          <span className="flex items-center space-x-4 justify-evenly">
            {" "}
            <FaFileAlt /> View My Resume
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
          }`}
        >
          <FaRegSmile className="absolute top-4 left-4 text-5xl text-white" />
          <p className={`p-10 pb-5 `}>
            Hi, I&apos;m Meti Abera, an Information Science graduate with a
            strong interest in networking, cybersecurity, and web development. I
            enjoy using technology to solve practical problems and create
            reliable digital experiences.
          </p>
          <p className={`px-10 `}>
            I hold a Bachelor&apos;s degree in Information Science, which gave
            me a broad foundation in systems, software, databases, and
            technology project development.
          </p>
        </div>

        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
          }`}
        >
          <FaLaptopCode className="absolute top-4 left-4 text-5xl text-white" />

          <p className={`p-10 pb-5`}>
            I am able to build different types of websites, from responsive
            portfolio pages to practical web applications. I focus on creating
            clear, usable interfaces supported by dependable functionality.
          </p>
          <p className={`px-10 `}>
            Building these projects has strengthened my problem-solving,
            teamwork, and communication skills while giving me experience
            turning ideas into working solutions.
          </p>
        </div>

        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
          }`}
        >
          <FaUsers className="absolute top-4 left-4 text-5xl text-white" />
          <p className={`p-10 `}>
            My main professional interest is networking. I am interested in how
            networks are designed, secured, monitored, and maintained to keep
            systems connected and dependable.
          </p>
          <p className={`px-10 `}>
            I also bring a foundation in programming, database management, web
            development, and cybersecurity, allowing me to understand both the
            applications and infrastructure that support modern organizations.
          </p>
        </div>

        <div
          className={`rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 relative ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
          }`}
        >
          <FaLightbulb className="absolute top-4 left-4 text-5xl text-white" />
          <p className={`p-10`}>
            I have also completed cybersecurity training through NetAcad and the
            Qiyas training program. These experiences strengthened my awareness
            of security principles and encouraged me to keep developing my
            practical networking and cybersecurity skills.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Skill darkMode={darkMode} />
        {/* <TestimonyCard darkMode={darkMode} /> */}
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
