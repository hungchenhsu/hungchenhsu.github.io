import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
      <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
      <p className="text-gray-700 mb-3">{project.description}</p>
      <div className="flex gap-3">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          GitHub Repo
        </a>
        {project.linkedin && (
          <a
            href={project.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 rounded-lg border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition"
          >
            LinkedIn Post
          </a>
        )}
      </div>
    </div>
  );
}