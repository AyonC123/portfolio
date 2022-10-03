import React from "react"

import projectData from '../data/projectsData'
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <div>
      <div className="heading">
        projects
      </div>
      <div className="cards">
        <ProjectCard data={projectData} />
      </div>
    </div>
  )
}

export default Projects