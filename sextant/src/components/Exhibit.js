import React from 'react'

const Exhibit = ({children, name}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <div className='ExhibitContent'>
       {children} 
      </div>
    </div>
  )
}

export default Exhibit