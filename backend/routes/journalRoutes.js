// defines API routes for handling travel journal requests
// link to controller js file  to manage journal entries ***** if using api *****

const express = require('express');
const router = express.Router();
const JournalController = require('../controllers/journalController');



router.post('/entries', JournalController.createJournalEntry);
router.get('/entries', JournalController.getAllJournalEntries);
router.get('/entries/:id', JournalController.getJournalEntryById);
router.put('/entries/:id', JournalController.updateJournalEntry);
router.delete('/entries/:id', JournalController.deleteJournalEntry);
router.get('/search', JournalController.searchEntriesByTitle);


module.exports = router;
