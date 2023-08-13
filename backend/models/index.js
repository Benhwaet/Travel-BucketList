const User = require('./User');
const JournalEntry = require('./journalEntry');
const TravelDestination = require('./travelDestination');

User.hasMany(TravelDestination, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(JournalEntry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TravelDestination.belongsTo(User, {
  foreignKey: 'user_id', //
});

JournalEntry.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, JournalEntry, TravelDestination };