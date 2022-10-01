import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare as open } from '@fortawesome/free-solid-svg-icons'

import skillsData from '../data/skillsData'
import projectData from '../data/projectsData'

const num = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Home() {
  const skills = []
  const projects = []

  for (let i = 0; i <= 3; i++) {
    skills.push(skillsData[i])
  }

  for (let i = 0; i <= 2; i++){
    projects.push(projectData[i])
  }
  
  return (
    <>
      <div className='intro'>
        <div className='pfp'></div>
        <div className='about'>
          <div className='a-title'>
            Hi! I'm Ayon
          </div>
          <div className='a-description'>
            My Name is Ayon Choudhoury and I am a Full Stack Developer,  
            I am adhoc in Exun and a student in DPS RKPuram.
          </div>
        </div>
      </div>
      <div className='showcase'>
        <div className='s-section'>
            <div className='s-title'>
              Skills
            </div>
            <div className='s_cards'>
            {
              skills.map((data) => (
                <div className='s-card'>
                  <div className='s-name'>{data.name}</div>
                  <img width='100' src={data.img} alt='logo'></img>
                </div>
              ))
            }
            </div>
            <Link to='/skill' className='s-link'>
              See more  
            </Link> 
        </div>
        <div className='projects'>
          <div className='s-section'>
              <div className='s-title'>
                Projects
              </div>
              <div className='s_cards'>
              {
                projects.map((data) => (
                  <div className='s-card'>
                    <img className='s-img' src={`/${num(1, 4)}.jpeg`} alt='banner' width='200' height='100'></img>
                    <div className='s-name'>{data.name}</div>
                    <a className='s-openlink' href={data.link} target="blank">Open <FontAwesomeIcon icon={open}/></a>
                  </div>
                ))
              }
              </div>
              <Link to='/projects' className='s-link'>
                See more  
              </Link> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Home