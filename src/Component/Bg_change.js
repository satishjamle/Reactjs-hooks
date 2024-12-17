import React, { useState } from "react";

const purple = "purple";

export const Bg_change = () => {
  const [bg, setBg] = useState(purple);
  const [name ,setName] = useState('click me')

  const bgChange = () => {
    // console.log("clicked");

    let newbg = '#34495e'
    setBg(newbg)
    setName('ouch !! 🐺')
  };
  const bgBack =()=>{
    setBg(purple)
    setName(' Ayyo !!😡')
  }

  return (
    <>
      <div  style={{backgroundColor:bg}}>
        <button style={{marginTop:'50%'}} onClick={bgChange} onDoubleClick={bgBack} >{name}</button>
      </div>
    </>
  );
};
