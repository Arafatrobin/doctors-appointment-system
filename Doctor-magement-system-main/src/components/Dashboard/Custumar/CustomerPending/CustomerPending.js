import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./../../../../App";
import "./CustomerPending.css";

const CustomerPending = ({ status }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [appointments, setAppointments] = useState([]);
  const email = sessionStorage.getItem("email");
  console.log(appointments);

  useEffect(() => {
    fetch(
      `http://localhost:5000/customerPendingAppointments/${status}/${email}`
    )
      .then((res) => res.json())
      .then((result) => setAppointments(result));
  }, [email]);

  const lastItem = appointments[appointments.length - 1];
  console.log(appointments);
  return (
    <div>
      <h1 className="cutomers-length mt-3">
        Total Approved Appointments{" "}
        <span className="text-danger">{appointments.length}</span>
      </h1>

      {/* <a href={}></a> */}
      <div className="customer-appintments mt-3">
        <div className="row">
          {appointments?.map((pd) => (
            <div key={pd._id} className="col-md-6 col-lg-4 col-sm-12">
              <div className="cart-box">
                <h5>{pd?.name}</h5>
                <h6>Problem: {pd?.problemDetails}</h6>
                <h4>
                  Status: <mark>{pd?.status}</mark>
                </h4>
                <h6>Doctor email: {pd?.doctorEmail}</h6>
                <button className="btn btn-info m-2 p-1">
                  <a className="text-decoration-none text-black" href="https://meet.google.com/">Join Conference</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerPending;
