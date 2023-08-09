// handles requests related to travel journal entries
// create new , retrieve existing , ext ** infinite scrolling might not need **

const express = require('express');
const router = express.Router();

// Temporary storage for journal entries (replace this with a database in a real application)
let journalEntries = [];

// Route to get all journal entries
router.get('/entries', (req, res) => {
  res.json(journalEntries);
});

// Route to create a new journal entry
router.post('/entries', (req, res) => {
  const { entry } = req.body;

  if (!entry) {
    return res.status(400).json({ error: 'Please provide an entry.' });
  }

  // Save the entry (you may want to store it in a database in a real application)
  journalEntries.push(entry);

  res.status(201).json({ message: 'Entry created successfully.' });
});

// Route to delete a journal entry by index
router.delete('/entries/:index', (req, res) => {
  const { index } = req.params;

  if (isNaN(index) || index < 0 || index >= journalEntries.length) {
    return res.status(400).json({ error: 'Invalid index.' });
  }

  // Remove the entry at the specified index
  journalEntries.splice(index, 1);

  res.json({ message: 'Entry deleted successfully.' });
});

module.exports = router;
