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

JournalEntry.belongsTo(TravelDestination, {
  foreignKey: 'destination_id',
});

TravelDestination.hasMany(JournalEntry, {
  foreignKey: 'destination_id',
  onDelete: 'NULL'
});

module.exports = { User, JournalEntry, TravelDestination };