import React from "react";
import CircularProgressBar from "./CircularProgressBar";
function Skill({ darkMode }) {
  return (
    <div
      className={`container mx-auto p-6 text-lg my-8
            ${darkMode ? "bg-gray-800 text-white" : "bg-pink-200 "}`}
    >
      <h3 className="text-3xl  mb-2 font-bold">Skills</h3>
      <h3 className="text-xl font-bold mb-2">Programming Languages</h3>

      <ul className="mb-6 ">
        <li className="flex items-center justify-between mb-2">C++ </li>
        <CircularProgressBar darkMode={darkMode} percentage={90} />
        <li className="flex items-center justify-between mb-2">Java </li>
        <CircularProgressBar darkMode={darkMode} percentage={80} />
        <li className="flex items-center justify-between mb-2">C# </li>
        <CircularProgressBar darkMode={darkMode} percentage={70} />
        <li className="flex items-center justify-between mb-2">JavaScript </li>
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
      </ul>
      <h3 className="text-xl font-bold mb-2">Database Managemnt</h3>
      <ul>
        <li className="flex items-center justify-between mb-2">SQL</li>
        <CircularProgressBar darkMode={darkMode} percentage={60} />
      </ul>
    </div>
  );
}

export default Skill;
