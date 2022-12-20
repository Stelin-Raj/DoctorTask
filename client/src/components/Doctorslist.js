import React, { Fragment, useState, useEffect } from "react";
import Editlist from "./Editlist";

const ListDoctors = () => {
  const [list, setList] = useState([]);

  //Delete function
  const deleteDoctors = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5500/master/${id}`, {
        method: "DELETE",
      });
      setList(list.filter((lists) => lists.doctor_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

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
  console.log(list);
  return (
    <Fragment>
      <div className="container">
        <table class="table table-hover mt-5 text-center">
          <thead>
            <tr>
              <th scope="col">Doctor Name</th>
              <th scope="col">Specialist</th>
              <th scope="col">Fees</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => (
              <tr key={list.doctor_id}>
                <td>{list.Name}</td>
                <td>{list.Specialist}</td>
                <td>{list.Fees}</td>
                <td>
                  <Editlist list={list} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDoctors(list.doctor_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListDoctors;
