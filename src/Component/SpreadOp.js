import React, { useState } from "react";

export const SpreadOp = () => {
  const [fullname, SetFullName] = useState({
    fname: "",
    lname: "",
    Email: "",
    phone: "",
    qua: "",
  });

  const InputHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { name, value } = event.target;

    SetFullName((prevalue) => {
      console.log(prevalue);


      return {
        ...prevalue,
        [name]: value,
      };

    //   sirf 2line uper ki use krna h itne bade code ki jgh

      //   if (name === "fName") {
      //     return {
      //       fname: value,
      //       lName: prevalue.lName,
      //       Email: prevalue.Email,
      //       phone: prevalue.phone,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fname: prevalue.fname,
      //       lName: value,
      //       Email: prevalue.Email,
      //       phone: prevalue.phone,
      //     };
      //   } else if (name === "Email") {
      //     return {
      //       fname: prevalue.fname,
      //       lName: prevalue.lName,
      //       Email: value,
      //       phone: prevalue.phone,
      //     };
      //   } else if (name === "phone") {
      //     return {
      //       fname: prevalue.fname,
      //       lName: prevalue.lName,
      //       Email: prevalue.Email,
      //       phone: value,
      //     };
      //   }
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
            Hello {fullname.fname} {fullname.lname}
          </h1>
          <p> {fullname.Email} </p>
          <p> {fullname.phone} </p>
          <p> {fullname.qua} </p>
          <input
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
            onChange={InputHandler}
            value={fullname.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
            onChange={InputHandler}
            value={fullname.lname}
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
          <input
            type="text"
            placeholder="Enter Your qualification"
            name="qua"
            onChange={InputHandler}
            value={fullname.qua}
          />
          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    </>
  );
};
