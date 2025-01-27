// src/component/GitHubRepos.js
import React, { useEffect, useState } from "react";

function GitHubRepos({ darkMode }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/mettiii/repos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div
        className={`h-full w-full ${
          darkMode ? "bg-gray-800 text-white" : "bg-pink-200 text-black"
        }`}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`h-full w-full ${
          darkMode ? "bg-gray-800 text-white" : "bg-pink-200 text-black"
        }`}
      >
        Error: {error}
      </div>
    );
  }

  return (
    <div
      className={`container m-auto p-2 w-full min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-700 text-white" : "bg-pink-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Recent GitHub Repositories</h1>
      <ul className="list-disc list-inside">
        {repos.slice(0, 10).map((repo) => (
          <li
            key={repo.id}
            className={`hover:underline mb-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-500"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="h-32"></div>
    </div>
  );
}

export default GitHubRepos;
