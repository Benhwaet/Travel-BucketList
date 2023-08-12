// schema and attributes for the travel destination table
// interact with the travel destination table in the database ???

//based on class notes and models in module 14, activity 15
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class TravelDestination extends Model {}

TravelDestination.init(
  {
  destination_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  continent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  visited: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'travelDestination',
}
);

module.exports = travelDestination;