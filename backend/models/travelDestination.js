// schema and attributes for the travel destination table
// interact with the travel destination table in the database ???

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TravelDestination extends Model { }

TravelDestination.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // primaryKey: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        visited: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'travelDestination'
    }
);

module.exports = TravelDestination;