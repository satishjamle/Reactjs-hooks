// Useapi.js

import React, { createContext } from "react";
import { ComA } from "./ComA";

// Create contexts for first name and last name
const fName = createContext();
const lName = createContext();

export const Useapi = () => {
  return (
    <fName.Provider value={"Admin"}>
      <lName.Provider value={"reactdeveloper"}>
        <ComA />
      </lName.Provider>
    </fName.Provider>
  );
};

export { fName, lName }; // exporting context to use in child components
