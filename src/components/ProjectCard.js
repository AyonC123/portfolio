import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare as open } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
  const projects = props.data

  const num = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
    {
      projects.map((data) => (
        <div className='s-card card'>
          <img className='s-img img' src={`/${num(1, 10)}.jpeg`} alt='banner' width='200' height='100'></img>
          <div className='s-name name'>{data.name}</div>
          <a className='s-openlink openlink' href={data.link} target="blank">Open <FontAwesomeIcon icon={open}/></a>
        </div>
      ))
    }
   </>
  )
}

export default ProjectCard