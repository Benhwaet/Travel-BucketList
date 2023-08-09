// schema and attributes for the user table
//  interact with the user data in the database

// user.js
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize(''); //


const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
  },
});

module.exports = { User, sequelize };
