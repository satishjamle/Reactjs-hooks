import React, { useState } from 'react'

export default function Inc_Dec() {

    const [num ,setNum] = useState(5)

    const IncNum =()=>{
        setNum(num+1);

    }

    const DecNum =()=>{
        if(num>0){
        
            setNum(num-1)
        }else{
            alert('sorry  zero limit not reached')
            setNum(0)
        }

    }



  return (
    <>
    <div className="main_div">
        <div className="center_div">
            <h1> {num} </h1>
            <div className="btn_div">
                <button style={{marginRight:'40px'}} onClick={IncNum}>Increm</button >
                <button onClick={DecNum}>Decrem</button>
            </div>
        </div>

    </div>
    
    </>
  )
}
