import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitForm = () => {
    axios
      .post(`http://localhost:5500/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {});
  };

  return (
    <Fragment>
<div className="container">
  <div className="form">
        <h1 className="text-center mt-5">Login</h1>
        <form className="mt-5">
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          </form>
          <button type="submit" className="btn btn-primary" onClick={onSubmitForm}>
            Login
          </button>
          </div>
      </div>
    </Fragment>
  );
};

export default Loginform;
