// configuring the connection to the database using Sequelize using details from db.config.js
const Sequelize = require("sequelize");
const dbConfig = require("./db.config.js");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );

  module.exports = sequelize;