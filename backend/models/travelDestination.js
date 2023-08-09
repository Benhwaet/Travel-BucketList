// schema and attributes for the travel destination table
// interact with the travel destination table in the database ???

const { DataTypes } = require('sequelize');
const db = require('../utils/database'); // Importing the Sequelize instance

const Destination = db.define('Destination', {
  destination_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Destination;