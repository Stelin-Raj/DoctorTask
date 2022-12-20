import React, { Fragment, useState } from "react";

const Editlist = ({ list }) => {

  const [doctorname, setDoctorName] = useState(list.Name);
  const [specialist, setSpecialist] = useState(list.Specialist);
  const [fees, setFees] = useState(list.Fees);

  const updatedata = async e => {
    e.preventDefault();
    try {
      // const body = { doctorname, specialist, fees };
      const response = await fetch(
        `http://localhost:5500/master/${list.doctor_id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({doctorname, specialist, fees}),
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  // function handleSubmit(event) {
  //   event.preventDefault();
  
  //   fetch(`/master/${list.doctor_id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({ Name: doctorname, Specialist: specialist, Fees:fees }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // Update the user data in the React app if the update was successful
  //         setUser({ name: name, email: email });
  //       } else {
  //         throw new Error('Error updating user');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${list.doctor_id}`}
      >
        Edit
      </button>
      <div class="modal" id={`id${list.doctor_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Doctor list</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={doctorname}
                onChange={e => setDoctorName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Specialist"
                value={specialist}
                onChange={e => setSpecialist(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Fees"
                value={fees}
                onChange={e => setFees(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={e => updatedata(e)}
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Editlist;
