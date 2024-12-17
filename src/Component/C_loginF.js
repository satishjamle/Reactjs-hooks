import React, { useState } from "react";
import './index.css'

export const C_loginF = () => {
  const [fullname, SetFullName] = useState({
    fname: "",
    lName: "",
    Email: "",
    phone: "",
  });

  const InputHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

     const {value, name} = event.target

    SetFullName((prevalue) => {
      // console.log(prevalue);

      if (name === "fName") {
        return {
          fname: value,
          lName: prevalue.lName,
          Email:prevalue.Email,
          phone:prevalue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: prevalue.fname,
          lName: value,
          Email:prevalue.Email,
          phone:prevalue.phone,
        };
    
       } else if (name === "Email") {
        return {
          fname: prevalue.fname,
          lName: prevalue.lName,
          Email:value,
          phone:prevalue.phone,
        };
      
      }
       else if (name === "phone") {
        return {
          fname: prevalue.fname,
          lName: prevalue.lName,
          Email:prevalue.Email,
          phone: value,
        };
      }
      
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submited");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullname.fname} {fullname.lName}
          </h1>
          <p> {fullname.Email} </p>
          <p> {fullname.phone} </p>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fName"
            onChange={InputHandler}
            value={fullname.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lName"
            onChange={InputHandler}
            value={fullname.lName}
          />
          <input
            type="Email"
            placeholder="Enter Your Email"
            name="Email"
            onChange={InputHandler}
            value={fullname.Email}
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            onChange={InputHandler}
            value={fullname.phone}
          />
          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    </>
  );
};
