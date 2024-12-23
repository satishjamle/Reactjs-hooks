// ComA.js

import React, { useContext } from "react";
import { fName, lName } from "./Useapi"; // Correctly import the context

export const ComA = () => {
  const firstName = useContext(fName); // Accessing value from fName context
  const lastName = useContext(lName); // Accessing value from lName context

  return (
    <div>
      <h1>Welcome, {firstName} {lastName}!</h1>
    </div>
  );
};
