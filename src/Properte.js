import React from 'react'

export const Properte = (Properte) => {
  return (
    <div>
        <h2>{Properte.name}</h2>
        <h3>{Properte.ayg}</h3>
        <img src={Properte.img}/>
    </div>
  )
}
