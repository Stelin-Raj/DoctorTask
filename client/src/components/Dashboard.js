import React, { Fragment, useState, useEffect } from "react";

// const Appoin = () => {
//     const navigate = useNavigate();
//     navigate(<Appointment />)
// }

const Dashboard = () => {
  const [list, setList] = useState([]);

  const getDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5500/master");
      const jsonData = await response.json();

      setList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <Fragment>
      {/* <Navbar /> */}
      <div className="container">
        <h1 className="text-center mt-5">Doctor List</h1>
        <table class="table table-hover mt-5 text-center">
          <thead>
            <tr>
              <th scope="col">Doctor Name</th>
              <th scope="col">Specialist</th>
              <th scope="col">Fees</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => (
              <tr key={list.doctor_id}>
                <td>{list.Name}</td>
                <td>{list.Specialist}</td>
                <td>{list.Fees}</td>
                <td>
                 <a href="/appointment"> <button className="btn btn-warning">Appointment</button></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Dashboard;
