import React, { useEffect, useState } from "react";
import "./Doctors.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allDoctors")
      .then((response) => response.json())
      .then((result) => {
        setDoctors(result.slice(0, 7));
      });
  }, []);

  return (
    <div className="container allDoctors">
      <h1 className="ourDoctors">Our Doctors</h1>
      <div className="row">
        {doctors.map((pd) => (
          <div className="col-lg-4 col-md-6 col-sm-12 py-4">
            <div className="doctor text-dark bg-white">
              <div className="doctor-image">
                <img className="image-border" src={pd.imageURL} alt="" />
              </div>
              <h6 className="mt-4">Name: {pd.name}</h6>
              <h6>Chamber: {pd.chamber}</h6>
              <h6>Phone: {pd.phone}</h6>
              <h6>Gender: {pd.gender}</h6>
              <button className="btn general-btn text-white">Details</button>
              <div className="doctor-icon mt-3">
                <p >
                  <span>
                    <a className="text-primary" href={pd.facebook}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </span>
                  <span>
                    <a className="text-primary" href={pd.instagram}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </span>
                  <span>
                    <a className="text-danger" href={pd.youtube}>
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
