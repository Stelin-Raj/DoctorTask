import React, { Fragment } from "react";

const Appointment = () => {
  return (
    <Fragment>
<div className="container">
  <div className="form">
        <h1 className="text-center mt-5">Patient Register Page</h1>
        <form className="mt-5">
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Name:
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Date of Birth:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter DOB"
            />
          </div>
          </form>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          </div>
      </div>
    </Fragment>
  );
};

export default Appointment;
