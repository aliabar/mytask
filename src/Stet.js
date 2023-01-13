import React from 'react'
import { useState } from 'react'
export const Stet = () => {
    const [text, Stettext] =useState("I'm going to school")
    const [drt, ktettext] =useState({
      name:"ali",
      ayg:20,
      cantrey:"libay",
      phon:242556,

   })
   const upptrState = () => {
    ktettext ( State => {
      return{...State,name:"Mohammed"}
    })  
   }
  const [Pdefxc, setPdefxc] = useState([
    {name:"ali",job:"front destinations"},
    {name:"Mohammed",job:"ui/ux"},
    {name:"Asmaa",job:"back end"}
  ])
const uptet = (newName) => {
  setPdefxc([
    {name:"ali",job:"front destinations"},
    {name:newName,job:"ui/ux"},
    {name:"Asmaa",job:"back end"}
  ])
}




  return (
    <div>
    <h1>Ali, where are you going?</h1>
    <h2>{text}</h2>
    <button onClick={ () => Stettext("I'm going to the mall")}>enter</button>


    <h1>{drt.name} {drt.ayg} {drt.cantrey} {drt.phon}</h1>
    <button onClick={upptrState}>uptrState</button>


    <h1>{Pdefxc[0].name}</h1>
    <h1>{Pdefxc[0].job}</h1>
    <h1>{Pdefxc[1].name}</h1>
    <h1>{Pdefxc[1].job}</h1>
    <h1>{Pdefxc[2].name}</h1>
    <h1>{Pdefxc[2].job}</h1>

    <button onClick={() => uptet ("Salem")}>click</button>
    </div>
  )
}
export default Stet