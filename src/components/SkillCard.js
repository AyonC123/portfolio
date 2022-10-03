import React from 'react'

function SkillCard(props) {
  const skills = props.data

  return (
    <>
      {
        skills.map((data) => (
          <div className='s-card card'>
            <div className='s-name name'>{data.name}</div>
            <img width='100' src={data.img} alt='logo'></img>
          </div>
        ))
      } 
    </>
  )
}

export default SkillCard