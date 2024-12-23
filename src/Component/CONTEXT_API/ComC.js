import React from "react";
import { firstName, Role } from "./C_API";

export const ComC = () => {
  return (
    <>
      <firstName.Consumer>
        {(firstName) => {
          return (
            <Role.Consumer>
              {(Role) => {
                return (
                  <h1>
                    my name is {firstName} {Role}
                  </h1>
                );
              }}
            </Role.Consumer>
          );
        }}
      </firstName.Consumer>
    </>
  );
};
