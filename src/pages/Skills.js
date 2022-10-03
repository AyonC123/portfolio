import React from "react"

import skillsData from '../data/skillsData'
import SkillCard from "../components/SkillCard"

function Skills() {
  return (
    <div>
      <div className="heading">
        Skills
      </div>
      <div className="cards">
        <SkillCard data={skillsData} />
      </div>
    </div>
  )
}

export default Skills