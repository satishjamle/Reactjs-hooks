import React, { useState } from "react";
import "./index.css";

export const S_form = () => {
  const [name, SetName] = useState("");
  const [fullName, setFullName] = useState();

  const InputHandler = (event) => {
    // console.log(event.target.value)
    SetName(event.target.value);
  };
  const onSubmit = () => {
    setFullName(name);
  };

  return (
    <>
      <div>
        <h1> {fullName}</h1>
        <input
          style={{
            height: "45px",
            backgroundColor: "white",
            color: "black",
            fontSize: "25px",
          }}
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={InputHandler}
        />

        <button onClick={onSubmit}> click me</button>
      </div>
    </>
  );
};
