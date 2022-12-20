const sequelize = require("../config");
const Sequelize = require("sequelize");

const PatientTable = sequelize.define("Patient", {
  patient_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DOB: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Problem:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  Appointment_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  Appointment_time_from_and_to: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  Paid_amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Doctor_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => console.log("Table created successfully"))
  .catch((err) => console.log("Error creating the table", err));

module.exports = PatientTable;