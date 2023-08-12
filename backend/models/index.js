const User = require('./User');
const JournalEntry = require('./journalEntry');
const TravelDestination = require('./travelDestination');

User.hasMany(TravelDestination, {
  foreignKey: '1',
  onDelete: 'CASCADE'
});

User.hasMany(JournalEntry, {
  foreignKey: '1',
  onDelete: 'CASCADE'
});

TravelDestination.belongsTo(User, {
  foreignKey: '1',
});

JournalEntry.belongsTo(User, {
  foreignKey: '1',
})

module.exports = { User, JournalEntry, TravelDestination };