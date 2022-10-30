// import React from "react";
// import { Carousel } from "react-bootstrap";
// import doctor1 from "../../../images/doctor/dcotor1.png";
// import doctor2 from "../../../images/doctor/doctor2.png";
// import doctor3 from "../../../images/doctor/doctor4.jpg";
// import "./DoctorCarousel.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import doctor1 from "../../../images/Popular doctors/usman-yousaf-doctor-1.png";
import doctor2 from "../../../images/Popular doctors/rucha-doctor-2.jpg";
import doctor3 from "../../../images/Popular doctors/sobuj-doctor-3.jpg";
const DoctorCarousel = () => {
  return (
    <div className="container doctor-carousel-container py-5">
      <h1 className="mb-5">Our Popular Doctors</h1>
      <Carousel>
        <div className="d-flex justify-content-center">
          <img
            className="col-md-6 w-25 rounded-3"
            src={doctor2}
            alt=""
          />

          <div className="col-md-6 p-3 mt-5">
            <h1>Name: Dr. Usman</h1>
            <h4>Spacilist: Cardiologist</h4>
            <p>
              Cardiologists focus on treatment of the heart and its blood vessels. This can include the management of heart failure, cardiovascular disease, and post-operative care.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="col-md-6 w-25 rounded-3"
            src={doctor3}
            alt=""
          />

          <div className="col-md-6 p-3 mt-5 justify-text">
            <h1>Name: Dr. Rucha</h1>
            <h4>Spacilist: Gastroenterologist</h4>
            <p>
              Gastroenterologists treat the functions and diseases of the digestive system.9
              This field attracts physicians who enjoy doing procedures, but who also like seeing patients in an outpatient setting.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center justify-text">
          <img
            className="col-md-6 w-25 rounded-3"
            src={doctor1}
            alt=""
          />

          <div className="col-md-6 p-3 mt-5 justify-text">
            <h1>Name: Dr. Sabuj Kazi</h1>
            <h4>Spacilist: Endocrinologist</h4>
            <p>
              Endocrinologists treat the endocrine system—the glands that produce and secrete hormones that control and regulate nearly all of the body's functions. People with diabetes or thyroid disease are often treated by an endocrinologist.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default DoctorCarousel;
