import React from 'react'
import { Link } from 'react-router-dom'

import skillsData from '../data/skillsData'

function Home() {
  const skills = []
  for (let i = 0; i <= 3; i++) {
    skills.push(skillsData[i])
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
                  <img className='s-img' width='100' src={data.img} alt='logo'></img>
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
                skills.map((data) => (
                  <div className='s-card'>
                    <div className='s-name'>{data.name}</div>
                    <img className='s-img' width='100' src={data.img} alt='logo'></img>
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