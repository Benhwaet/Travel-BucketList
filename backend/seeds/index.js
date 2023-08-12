const sequelize = require('../../connection');
const seedUser = require('./userSeed');
const seedtravelDestination = require('./travelDestinationSeed');
const seedJournal = require('./journalEntrySeed');

const seedAll = async () => {
    await sequelize.sync ({ force: true });

    await seedUser();

    await seedtravelDestination();

    await seedJournal();

    process.exit(0);
};

seedAll();