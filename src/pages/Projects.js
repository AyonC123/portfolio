import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare as open } from '@fortawesome/free-solid-svg-icons'

import projectData from '../data/projectsData'

function Projects() {
  const num = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div>
      <div className="heading">
        projects
      </div>
      <div className="cards">
        {
          projectData.map(data => (
            <div className="card">
              <img className='img' src={`/${num(1, 4)}.jpeg`} alt='banner' width='200' height='100'></img>
              <div className='name'>{data.name}</div>
              <a className='openlink' href={data.link} target="blank">Open <FontAwesomeIcon icon={open}/></a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects