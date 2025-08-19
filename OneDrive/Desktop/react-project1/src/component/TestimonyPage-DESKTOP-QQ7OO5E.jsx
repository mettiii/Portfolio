import PropTypes from "prop-types";

function TestimonyPage(props) {
  const { darkMode, image, name, quote } = props;

  return (
    <div
      className={`border p-4 rounded shadow grid grid-cols-2 transition-colors duration-300  ${
        darkMode ? "bg-gray-700 text-white" : "bg-pink-100 text-black"
      }`}
    >
      <div>
        <img
          src={image}
          alt="Person's picture"
          className="w-30 h-40 rounded mb-2 justify-self-center"
        />
      </div>
      <div className="justify-self-center m-5 p-5">
        <p className="font-bold text-xl">{name}</p>
        <q>{quote}</q>
      </div>
    </div>
  );
}

TestimonyPage.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default TestimonyPage;
