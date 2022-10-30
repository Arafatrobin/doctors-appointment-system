import React from "react";
import "./Contact.css";

const Contact = () => {
  // const fakeData = { link: "https://www.google.com/" };
  return (
    <div className="bg-white mt-5 pt-3">

      <div className="contact-form">
        <h2 className="title-text p-2 rounded-3">
          <h1>Contact with us</h1>
        </h2>
        <div className="row  d-flex justify-content-center ">
          <div className="col-md-6 mt-5">
            <input
              className="input-field rounded-3"
              type="text"
              placeholder="Enter Your Name"
            />
            <br />
            <input
              className="input-field rounded-3"
              type="Email"
              placeholder="Enter Your Email"
            />
            <br />
            <input
              className="input-field rounded-3"
              type="text"
              placeholder="Enter Your Phone"
            />
            <br /><input className="input-button w-25" type="submit" value="Submit" />

          </div>
          <div className="col-md-6">
            <div className="contact-im ">
              <img
                className="w-100 p-5 rounded-3"
                src="https://i.ibb.co/FVMcnDp/undraw-contact-us-15o2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
