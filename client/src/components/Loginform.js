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
        Email: email,
        Password: password,
      })
      .then((response) => {
        if (response.data) {
          navigate("./dashboard");
        } else if (response.status == 200) {
          navigate("/login");
        }
      })
      .catch((error) => {});
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="col-lg-12 login-title mt-5 text-center">Login</h1>

        <div className="col-lg-12 login-form">
          <form onSubmit={onSubmitForm}>
            <div className="form-group">
              <label className="form-control-label mt-3">Email:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-control-label mt-3">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="col-lg-6 login-btm login-button mt-3">
              <button type="submit" className="btn btn-outline-primary">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3 col-md-2"></div>
    </Fragment>
  );
};

export default Loginform;
