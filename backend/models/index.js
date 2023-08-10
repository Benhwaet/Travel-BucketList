const User = require('./User');
const JournalEntry = require('./JournalEntry');
const TravelDestination = require('./TravelDestination');

User.hasMany(TravelDestination, JournalEntry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

TravelDestination.belongsTo(User, {
  foreignKey: 'destination_id',
});

JournalEntry.belongsTo(User, {
  foreignKey: 'entry_id',
})

// JournalEntry.hasOne(TravelDestination, {
//   foreignKey: 'destination_id',
// })

module.exports = { User, JournalEntry, TravelDestination };
