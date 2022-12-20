import React, { Fragment } from "react";
import Loginform from "./components/Loginform";
import Registration from "./components/RegisterForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Master from "./components/Master";
import Dashboard from "./components/Dashboard";
import Appointment from "./components/appointment";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <nav class="navbar navbar-expand-sm bg-primary navbar-light">
          <div class="container-fluid">
            <div class="navbar-nav">
              <Link className="nav-link">BookMyMD</Link>
              <Link className="nav-link" to="/dashboard">
                Home
              </Link>
              <Link className="nav-link" to="/master">
                Master
              </Link>
              <Link className="nav-link" to="/patientList">
                Patient list
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master" element={<Master />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
