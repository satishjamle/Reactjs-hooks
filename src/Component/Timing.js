import React, { useState } from 'react'

export const Timing = () => {


    const newTime = new Date().toLocaleTimeString();


 const[cTime , setcTime]  = useState(newTime)

const UpdateTime =()=>{
let newCTime = new Date().toLocaleTimeString();

    setcTime(newCTime)
}
    




  return (
    <>
    <div className="box">
    <h1>{cTime}</h1>
    <button  onClick={UpdateTime}>Get Time</button>
   
    </div>
     </>
  )
}
