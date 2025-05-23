import React from "react";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects.json";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <About />
      <div className="w-full max-w-2xl mt-10 grid gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
export default App;