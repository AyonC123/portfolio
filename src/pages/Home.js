import React from 'react'
import { Link } from 'react-router-dom'

import skillsData from '../data/skillsData'
import projectData from '../data/projectsData'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'


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
            My Name is Ayon and I am a Full Stack Developer,  
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
              <SkillCard data={skills} />
            </div>
            <Link to='/skills' className='s-link'>
              See more  
            </Link> 
        </div>
        <div className='projects'>
          <div className='s-section'>
              <div className='s-title'>
                Projects
              </div>
              <div className='s_cards'>
                <ProjectCard data={projects} />
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