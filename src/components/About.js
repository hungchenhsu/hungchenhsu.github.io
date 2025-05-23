import React from "react";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={profile}
        alt="Profile"
        className="w-28 h-28 rounded-full shadow-md object-cover mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">Hung-Chen Hsu</h1>
      <p className="text-center text-gray-600 mb-2">
        Data Scientist & Business Analyst<br />
        Specializing in Data Science, Data Analysis, and AI-driven solutions.
      </p>
      <a
        href="https://www.linkedin.com/in/hungchenhsu/"
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank" rel="noopener noreferrer"
      >
        Find me on LinkedIn
      </a>
    </div>
  );
}