import PropTypes from "prop-types";
import { motion } from "framer-motion";
function HomePage({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`flex min-h-screen flex-col items-center justify-center pt-20 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-r from-gray-900 via-slate-800 to-gray-950 text-white"
          : "bg-gradient-to-r from-deep_twilight-500 to-bright_teal_blue-500 text-white"
      }`}
    >
      <div className="mt-8 grid grid-cols-1 gap-6 w-full max-w-5xl md:mt-12 md:grid-cols-2">
        <div className="flex flex-col items-start justify-start">
          <div className="text-5xl mb-2 font-extrabold drop-shadow-lg">
            Welcome To My Portfolio
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 space-y-4">
          <p className="mb-4 text-3xl font-semibold">
            I&apos;m a Networking &amp; Cybersecurity Enthusiast
          </p>
          <p className="mb-4 text-xl">
            I specialize in building secure network architectures, penetration
            testing, and developing resilient web applications.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block rounded-lg px-6 py-3 font-bold shadow-md transition-colors duration-300 hover:opacity-90 ${
              darkMode ? "bg-white text-slate-900" : "bg-slate-950 text-white"
            }`}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
      <div className="h-32"></div>
    </motion.div>
  );
}
HomePage.propTypes = {
  darkMode: PropTypes.bool,
};
export default HomePage;
