
// Initiate all routes
// Followed concepts from index.js files in module 14
const router = require('express').Router();

const authRoutes = require('../routes/userRoutes');
const travelDestinationRoutes = require('../routes/travelDestinationRoutes');
const journalRoutes = require('../routes/journalRoutes');
const homeRoutes = require('./home-routes.js');

router.use('/', (req, res) => {

}),
router.use('/auth', authRoutes);
router.use('/travel-destinations', travelDestinationRoutes);
router.use('/journal', journalRoutes);
router.use('/', homeRoutes);

module.exports = router;
