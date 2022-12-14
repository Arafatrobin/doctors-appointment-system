import React, { useState } from "react";
import "./DoctorDashboard.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import ApporvedAppointments from "../ApporvedAppointments/ApporvedAppointments";
import DoctorsStatus from "./../DoctorsStatus/DoctorsStatus";
import DoneAppointments from "./../../DoneAppointments/DoneAppointments";
import MyAppointments from "./../MyAppointments/MyAppointments";
import MyDoneAppointment from "./../MyDoneAppointment/MyDoneAppointment";
import SubmitPrescription from "../SubmitPrescription/SubmitPrescription";

const DoctorDashboard = () => {
  const [control, setControl] = useState("approved");
  return (
    <div className="dashboard d-flex text-center">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Doctor Dashboard</MenuItem>

          <SubMenu title="My Appointments" icon={"s"}>
            <MenuItem onClick={() => setControl("approved")}>
              Pending Appointments
            </MenuItem>
            <MenuItem onClick={() => setControl("done")}>
              Done Appointments
            </MenuItem>
          </SubMenu>
          {/* <MenuItem  title="All Ambulances" icon={"s"}>
            Make Schedules
          </MenuItem> */}
          <MenuItem onClick={() => setControl("SubmitPrescription")}>
            Submit Prescription
          </MenuItem>
          <MenuItem
            onClick={() => setControl("dcotorStatus")}
            title="All Blood Donar"
            icon={"s"}
          >
            Dcotor Status
          </MenuItem>
        </Menu>
      </ProSidebar>
      <div className="container text-center">
        {control === "approved" && <MyAppointments></MyAppointments>}
        {control === "done" && <MyDoneAppointment></MyDoneAppointment>}
        {control === "dcotorStatus" && <DoctorsStatus></DoctorsStatus>}
        {control === "SubmitPrescription" && <SubmitPrescription></SubmitPrescription>}
      </div>
    </div>
  );
};

export default DoctorDashboard;
