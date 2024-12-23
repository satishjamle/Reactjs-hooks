import React, { createContext } from "react";
import { ComA } from "./ComA";
import { ComC } from "./ComC";

const firstName = createContext();
const Role = createContext();

export const C_API = () => {
  return (
    <>
      <firstName.Provider value={"satish jamle"}>
        <Role.Provider value={"developer"}>
          <ComA />
        </Role.Provider>
      </firstName.Provider>
    </>
  );
};
export { firstName, Role };
