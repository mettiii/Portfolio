import CircularProgressBar from "./CircularProgressBar";
import PropTypes from "prop-types";
function Skill({ darkMode }) {
  return (
    <div
      className={`container mx-auto my-8 p-6 text-lg shadow-lg transition-colors duration-300 ${
        darkMode
          ? "border border-gray-600 bg-gray-800 text-white"
          : "border border-gray-300 bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
      }`}
    >
      <h3 className="text-3xl  mb-2 font-bold">Skills</h3>
      <h3 className="text-xl font-bold mb-2">Programming Languages</h3>

      <ul className="mb-6 ">
        <li className="flex items-center justify-between mb-2">C++ </li>
        <CircularProgressBar darkMode={darkMode} percentage={90} />
        <li className="flex items-center justify-between mb-2">Java </li>
        <CircularProgressBar darkMode={darkMode} percentage={80} />
        <li className="flex items-center justify-between mb-2">C# </li>
        <CircularProgressBar darkMode={darkMode} percentage={50} />
        <li className="flex items-center justify-between mb-2">JavaScript </li>
        <CircularProgressBar darkMode={darkMode} percentage={80} />
        <li className="flex items-center justify-between mb-2">Kotlin </li>
        <CircularProgressBar darkMode={darkMode} percentage={70} />
        <li className="flex items-center justify-between mb-2">Php </li>
        <CircularProgressBar darkMode={darkMode} percentage={60} />
        <li className="flex items-center justify-between mb-2">Python </li>
        <CircularProgressBar darkMode={darkMode} percentage={80} />
      </ul>

      <h3 className="text-xl font-bold mb-2">Frameworks and Libraries</h3>
      <ul>
        <li className="flex items-center justify-between mb-2">Bootstrap </li>

        <CircularProgressBar darkMode={darkMode} percentage={80} />
        <li className="flex items-center justify-between mb-2">Tailwind </li>
        <CircularProgressBar darkMode={darkMode} percentage={70} />

        <li className="flex items-center justify-between mb-2">React </li>
        <CircularProgressBar darkMode={darkMode} percentage={70} />

        <li className="flex items-center justify-between mb-2">Odoo </li>
        <CircularProgressBar darkMode={darkMode} percentage={60} />
      </ul>
      <h3 className="text-xl font-bold mb-2">Networking & Cybersecurity</h3>
      <ul className="mb-6">
        <li className="flex items-center justify-between mb-2">
          TCP/IP
          <CircularProgressBar darkMode={darkMode} percentage={85} />
        </li>
        <li className="flex items-center justify-between mb-2">
          Firewalls
          <CircularProgressBar darkMode={darkMode} percentage={80} />
        </li>
        <li className="flex items-center justify-between mb-2">
          Pen‑Testing
          <CircularProgressBar darkMode={darkMode} percentage={75} />
        </li>
        <li className="flex items-center justify-between mb-2">
          SIEM
          <CircularProgressBar darkMode={darkMode} percentage={70} />
        </li>
      </ul>
    </div>
  );
}
Skill.propTypes = {
  darkMode: PropTypes.bool,
};
export default Skill;
