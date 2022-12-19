import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-sm bg-primary navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                BookMyMD
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Master
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Patient list
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
