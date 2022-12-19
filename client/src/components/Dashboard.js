import React, { Fragment, useState } from "react";
import Navbar from "../navbar/navbar";
import ListDoctors from "./Doctorslist";

const Dashboard = () => {
  const [doctorname, setDoctorName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [fees, setFees] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5500/dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorname, specialist, fees }),
      });
      window.location = "/dashboard";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <h1 className="text-center mt-5">Doctor List</h1>
        <form className="mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control mt-3"
            value={doctorname}
            onChange={(e) => setDoctorName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control mt-3"
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
            placeholder="Specialist"
          />
          <input
            type="text"
            className="form-control mt-3"
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            placeholder="Fees"
          />
          <button className="btn btn-success mt-3">Add</button>
        </form>
      </div>
      <div>
        <ListDoctors />
      </div>
    </Fragment>
  );
};

export default Dashboard;
