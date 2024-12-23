import React, { useEffect, useState } from 'react'

export const Hooks_challenge = () => {

const[num ,setNum]  = useState(0)

useEffect(()=>{
    document.title=`you clicked me ${num} times`;
})

  return (
    <>
    <button onClick={()=>{
        setNum(num+1)
    }}>click me {num}</button>
    </>
  )
}
