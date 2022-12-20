const express = require("express");
const app = express();
const cors = require("cors");
const DoctorTable = require("./table/DoctorTable");
const PatientTable = require("./table/PatientTable");
const UserData = require("./table/UserData");

app.use(cors());
app.use(express.json());

//checking email using middleware
app.post("/register", checkUniqueEmail);

async function checkUniqueEmail(req, res, next) {
  try {
    const user = await UserData.findOne({
      where: {
        Email: req.body.email,
      },
    });
    if (user) {
      return res.status(400).send({
        error: "Email already exists",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: "Server error",
    });
  }
}

//Routes

//Register
app.post("/register", async (req, res) => {
  const newUsers = await UserData.create({
    Username: req.body.username,
    Email: req.body.email,
    Password: req.body.password,
  });
  res.send(newUsers);
});

//Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserData.findOne({
    where: { Email: email, Password: password },
  })
    .then((user) => {
      console.log(user);
      if (user) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((error) => {
      console.log(error);
      res.send("Error searching the database");
    });
});

//create doctor list
app.post("/master", async (req, res) => {
  const doctorList = await DoctorTable.create({
    Name: req.body.doctorname,
    Specialist: req.body.specialist,
    Fees: req.body.fees,
  });
  res.send(doctorList);
});

//get doctor list
app.get("/master", async (req, res) => {
  const allDoctors = await DoctorTable.findAll();
  console.log(allDoctors);
  res.send(allDoctors);
});

//delete doctor list
app.delete("/master/:id", async (req, res) => {
  const deleteList = await DoctorTable.findByPk(req.params.id);
  await deleteList.destroy();
  res.send(deleteList);
});

// update doctor list
// app.put("/master/:id", async function updateValues(req, res) {
//   try {
//     // const id = req.body;
//     const updatedValues = await DoctorTable.update(
//       {
//         Name: req.body.doctorname,
//         Specialist: req.body.specialist,
//         Fees: req.body.fees,
//       },
//       { returning: true, where: { doctor_id: req.body.id } }
//     );
//     return res.json({
//       success: true,
//       message: "Values successfully updated",
//       updatedValues,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Error updating values",
//       error,
//     });
//   }
// });

// Create a route that allows you to update a user
app.put("/master/:id", (req, res) => {
  // Find the user by ID
  DoctorTable.findByPk(req.params.id)
    .then((user) => {
      // Update the user using the data from the request body
      return DoctorTable.update({
        Name: req.body.doctorname,
        Specialist: req.body.specialist,
        Fees: req.body.fees,
      });
    })
    .then((data) => {
      // Return a response indicating that the update was successful
      res.send({ message: "User updated successfully" });
    })
    .catch((error) => {
      // Return an error response if something went wrong
      res.status(500).send({ message: "Error updating user" });
    });
});

app.listen(5500, () => {
  console.log("server is running on port 5500");
});
