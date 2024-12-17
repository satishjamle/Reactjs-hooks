import React, { useState } from "react";


export const LoginForm = () => {
  const [name, SetName] = useState("");

  const [LastName, setLastFName] = useState("");
  const [fullName, setFullName] = useState('');
  const [lastNewName, setLastNEWNAME] = useState("");

  const InputHandler = (event) => {
    // console.log(event.target.value)
    SetName(event.target.value);
  };

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNEWNAME(LastName)
  };

  const InputHandlerTwo = (event) => {
    setLastFName(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName}
            {lastNewName}
          </h1>
          <input
            type="text"
            placeholder="Enter Your First Name"
            onChange={InputHandler}
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            onChange={InputHandlerTwo}
            value={LastName}
          />
          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    </>
  );
};
