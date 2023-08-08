// define API routes for travel destinations
// link to controller js file to handle destination 

const router = require('express').Router();
const travelDestination = require('../../backend/models/travelDestination.js');

// router.get('/:cityId', async (req, res) => {
//     try {
//         const travelDestination = await travelDestination.findOne({ name: req.params.name });
//         res.json(travelDestination);
//     } catch (err) {
//         res.json(err);
//     }
// });

module.exports = router;