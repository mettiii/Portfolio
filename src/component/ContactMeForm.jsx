import { useState } from "react";
import PropTypes from "prop-types";
function Contact({ darkMode }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const successMessage = "Successfully Submitted";
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "" || message.trim() === "" || name.trim() === "") {
      setError("All fields are required.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    setShowSuccess(true);
    setEmail("");
    setMessage("");
    setName("");
  };

  const handleClose = () => {
    setShowSuccess(false);
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;

    if (newMessage.length > 500) {
      setError("Message cannot exceed 500 characters.");
    } else {
      setError("");
    }

    setMessage(newMessage);
  };

  return (
    <div className={`mt-16 h-screensm:mt-40 flex flex-col justify-center items-center`}>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center w-full md:w-1/2 p-4 rounded`}
      >
        <h2 className="text-xl font-bold mb-4 mt-4">Contact Me</h2>
        <label className="self-start">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`border rounded p-2 mb-4 w-full ${
            darkMode && "text-black"
          }`}
        />
        <label className="self-start">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`border rounded p-2 mb-4 w-full ${
            darkMode && "text-black"
          }`}
        />

        <label className="self-start">Message:</label>
        <textarea
          value={message}
          onChange={handleMessageChange}
          maxLength={500}
          required
          className={`border rounded p-2 mb-4 w-full h-24 ${
            darkMode && "text-black"
          }`}
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className={`text-white p-2 rounded w-36 mt-4 ${
            darkMode ? "text-white bg-slate-800" : "text-white bg-sky-500"
          }`}
        >
          Submit
        </button>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`p-6 rounded shadow-md ${
              darkMode ? "bg-gray-800 text-white" : "bg-sky-200"
            }`}
          >
            <p>{successMessage}</p>
            <button
              onClick={handleClose}
              className={`mt-4 px-4 py-2 rounded ${
                darkMode ? "bg-gray-800 text-white" : "bg-sky-500"
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Contact;
