import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {
     const[num ,setNum] = useState(0)
     const[nums ,setNums] = useState(0)

     useEffect(()=>{
        alert('i am clicked')
     },[num])

  return (
    <>
    <button onClick={()=>{setNum(num+1)}}>click me {num} </button>
    <br />
    <button onClick={()=>{setNums(nums+1)}}>click me {nums} </button>
    </>
  )
}
