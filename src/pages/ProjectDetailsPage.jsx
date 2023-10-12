// src/pages/ProjectDetailsPage.jsx

import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function ProjectDetailsPage({ projectsData }) {

  const [foundProject, setFoundProject] = useState(null)
  
  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  useEffect(() => {

    const thisProject = projectsData.find((oneProject) => {   //  <== ADD
      return oneProject._id === projectId;
    });

    if (thisProject) {
      
      setFoundProject(thisProject)

    }

  }, [projectId])

  
  return (
    <div>
      <h1>Project Details</h1>
      {!foundProject && <h3>Project not found!</h3>}  {/* <== ADD  */}
 
      {/*  ADD  */}
      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: {foundProject.technologies}</h3>
          <p>{foundProject.description}</p>
          <Link to="/projects">Back</Link>
        </>
      )}
    </div>
  )
}

export default ProjectDetailsPage;
