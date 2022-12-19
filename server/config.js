const Sequelize = require("sequelize");

const sequelize = new Sequelize("database_1", "postgres", "stelin", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
