const sequelize = require("../config");
const Sequelize = require("sequelize");

const DoctorTable = sequelize.define("Doctor", {
  doctor_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Specialist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Fees: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

sequelize
  .sync()
  .then(() => console.log("Table created successfully"))
  .catch((err) => console.log("Error creating the table", err));

module.exports = DoctorTable;