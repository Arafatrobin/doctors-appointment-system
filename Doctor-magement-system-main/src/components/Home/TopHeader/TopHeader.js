import React from "react";
import "./TopHeader.css";
import ServiceCart from "./../ServiceCart/ServiceCart";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="main-heading">
        <h1 className="header">
          Healthcare with a Modern Touch <br />
          APPOINTMENT ONLINE!
        </h1>
        <Link to="/category">
          <button className="btn btn-lg mt-4 appoinment-btn text-white">Get a Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
