// src/pages/ProjectsPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import projectsData from "../projects-data.json";

function ProjectsPage({ projectsData }) {
  const [projects, setProjects] = useState([]);

  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">

          <Link to={`/projects/${project._id}`}>
            <h3>{project.name}</h3>
          </Link>

            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsPage;
