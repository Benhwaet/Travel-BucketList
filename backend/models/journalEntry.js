// schema and attributes for the user table
// interact with the journal entry data in the database ???

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../connection');
const TravelDestination = require('./travelDestination');

class JournalEntry extends Model {}

JournalEntry.init(
  {
    entry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    entry_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    entry_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: TravelDestination,
        key: 'destination_id'
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'journalEntry',
  }
);


JournalEntry.belongsTo(TravelDestination, { foreignKey: 'destination_id' });

module.exports = JournalEntry;