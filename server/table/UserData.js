const sequelize = require("../config");
const Sequelize = require("sequelize");

const UserData = sequelize.define("Userdata", {
  User_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize
  .sync()
  .then(() => console.log("Table created successfully"))
  .catch((err) => console.log("Error creating the table", err));

module.exports = UserData;