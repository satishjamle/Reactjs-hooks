import React, { useState } from "react";

export const HookUser = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum=()=>{
    setCount(count-1)
  }
  return (
    <>
    <div className="container">
      <button style={{fontSize:'2rem', color:'green'}} onClick={IncNum}>Inc_Num </button>
      <h1>{count}</h1>

      <button style={{fontSize:'2rem', color:'red' }} onClick={DecNum}>Dec_Num </button>
      </div>
    </>
  );
};
