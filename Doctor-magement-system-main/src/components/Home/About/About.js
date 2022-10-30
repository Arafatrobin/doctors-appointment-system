import React from "react";
import "./About.css";
import doctor from '../../../images/doctor/doctor2.png';

const About = () => {
  return (
    <div className="container mt-5">
      <div className="about-section">
        <div className="row">
          <div className="col-md-6">
            <div className="about-right-section text-start">
              <h2 className="title-text p-1 rounded-3">
                <h1 className="text-center">Our Mission</h1>
              </h2>

              <p className="mission text-justify">
                We are trying to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more.
                We believe that everyone should have access to convenient, affordable, and high-quality care.
                We are on a mission to change how healthcare is delivered in Bangladesh. We know how daunting getting access to the right care can be which is why we focus on turning a doctor visit into a delightful experience.
                Our goal is to make the process intuitive for our patients and provide care where ever you are – in clinic or at-home.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image w-100">
              <img
                className="w-100"
                src={doctor}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
