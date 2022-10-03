import React from "react"

import skillsData from '../data/skillsData'

function Skills() {
  return (
    <div>
      <div className="heading">
        Skills
      </div>
      <div className="cards">
        {
          skillsData.map(data => (
            <div className="card">
              <div className="name">{data.name}</div>        
              <img width='100' src={data.img} alt='logo'></img>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills