import React, { Fragment, useState } from "react";

const Editlist = ({list}) => {
  const [doctorname, setDoctorName] = useState(list.doctorname);
  const [specialist, setSpecialist] = useState(list.specialist);
  const [fees, setFees] = useState(list.fees);

  const updatedata = async(e) => {
    e.preventDefault();
    try {
        const body = {doctorname, specialist, fees};
        const response = await fetch(`http://localhost:5500/dashboard/${list.doctor_id}`, {
            method:"PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        })
        console.log(response);
    } catch (err) {
        console.error(err.message)
    }
    
    }
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
      {/* id = id10 */}
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
                onChange={(e) => setDoctorName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Specialist"
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Fees"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => updatedata(e)}
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
