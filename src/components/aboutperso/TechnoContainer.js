import React from 'react'

function TechnoContainer({name, technoPic }) {
  return (
    <div>
        <p>{name}</p>
        <img src={technoPic} alt={name}/>
    </div>
  )
}

export default TechnoContainer