import PropTypes from "prop-types";

function CircularProgressBar({ percentage, darkMode }) {
  const radius = 30;
  const strokeWidth = 5;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffsetAchieved =
    circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`flex flex-col items-center ${
        darkMode ? "text-white" : "text-black"
      }`}
      style={{ padding: 0, margin: 0 }}
    >
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke={darkMode ? "#4B5563" : "#ffffff"} // lighter gray for dark mode, pink-300 for light mode
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={darkMode ? "#ffffff" : "#FFB6C1"} // White for dark mode, light pink for light mode
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffsetAchieved}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-500"
        />
        <text
          x={radius}
          y={radius}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fill: darkMode && "white" }}
          className="text-lg font-bold"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}
CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default CircularProgressBar;
