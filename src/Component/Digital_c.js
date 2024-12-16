import React, { useState } from "react";

export const Digital_c = () => {
  let Time = new Date().toLocaleTimeString();

  const [currtime, setcurrtime] = useState(Time);

  const UpdateTime = () => {
    Time = new Date().toLocaleTimeString();

    setcurrtime(Time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <>
    <div className="Box">
      <h1 className="Digital">{currtime}</h1>
      {/* <button onClick={UpdateTime} > click </button> */}
   
      </div>
    </>
  );
};
