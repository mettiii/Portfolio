import myLogo from "../assets/A.png";
import PropTypes from "prop-types";
function HomePage({ darkMode }) {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-700 text-white" : "bg-sky-100 text-black"
      }`}
    >
      <div className="mt-44 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start mb-4">
            <img
              src={myLogo}
              alt="Logo"
              className="w-10 h-10 object-cover sm:w-10 sm:h-10"
            />
          </div>
          <div className="text-5xl mb-2 font-extrabold">
            Welcome To My Portfolio
          </div>
        </div>
        <div className="flex flex-col justify-center p-10">
          <p className="mb-4 text-3xl font-semibold">
            I&apos;m a Web Developer
          </p>
          <p className="mb-4 text-2xl">
            I can help you build a product, feature, or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don&apos;t hesitate to contact me.
          </p>
          <p className="text-2xl">
            Browse through my portfolio and see if I could be any assistance for
            your upcoming projects.
          </p>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
}
HomePage.propTypes = {
  darkMode: PropTypes.bool,
};
export default HomePage;
