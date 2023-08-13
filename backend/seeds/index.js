const sequelize = require('../../connection');
const seedUser = require('./userSeed.json');
const seedTravelDestination = require('./travelDestinationSeed.json');
const seedJournal = require('./journalEntrySeed.json');
const { User } = require('../models');
const { JournalEntry } = require('../models');
const { TravelDestination } = require ('../models');


const seedAll = async () => {
    await sequelize.sync ({ force: true });

    await User.bulkCreate(seedUser, {
        individualHooks: true,
        returning: true,
      });
   
    await JournalEntry.bulkCreate(seedJournal);

    // await JournalEntry.bulkCreate(seedJournal)
    await TravelDestination.bulkCreate(seedTravelDestination);
   

    process.exit(0);
};

seedAll();