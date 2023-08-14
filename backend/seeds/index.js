const sequelize = require('../../connection');
const seedUser = require('./userSeed.json');
const seedTravelDestination = require('./travelDestinationSeed.json');
const seedJournal = require('./journalEntrySeed.json');
const { User } = require('../models');
const { JournalEntry } = require('../models');
const { TravelDestination } = require ('../models');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  await TravelDestination.bulkCreate(seedTravelDestination);


  const travelDestinations = await TravelDestination.findAll();
  const destinationIdMap = {};
  travelDestinations.forEach(destination => {
    destinationIdMap[destination.dataValues.name] = destination.dataValues.destination_id;
  });
  const journalEntriesWithUpdatedDestinationIds = seedJournal.map(entry => ({
    ...entry,
    destination_id: destinationIdMap[entry.destination_id],
  }));

  await JournalEntry.bulkCreate(journalEntriesWithUpdatedDestinationIds);

  process.exit(0);
};

seedAll();