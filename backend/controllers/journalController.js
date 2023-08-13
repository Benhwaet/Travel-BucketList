// handles requests related to travel journal entries
// create new , retrieve existing , ext ** infinite scrolling might not need **

const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { JournalEntry } = require('../models');

const JournalController = {
  createJournalEntry: async (req, res) => {
    try {
      const { title, username, entry_date, entry_content, destination_id } = req.body;
      const newEntry = await JournalEntry.create({
        title,
        username,
        entry_date,
        entry_content,
        destination_id,
      });

      res.status(201).json({ entry: newEntry });
    } catch (error) {
      console.error('Failed to create journal entry:', error);
      res.status(500).json({ error: 'Failed to create journal entry.' });
    }
  },

  getAllJournalEntries: async (req, res) => {
    try {
      const entries = await JournalEntry.findAll();
      res.json({ entries });
    } catch (error) {
      console.error('Failed to get journal entries:', error);
      res.status(500).json({ error: 'Failed to get journal entries.' });
    }
  },

  getJournalEntryById: async (req, res) => {
    try {
      const entryId = req.params.id;
      const entry = await JournalEntry.findByPk(entryId);

      if (!entry) {
        return res.status(404).json({ error: 'Journal entry not found.' });
      }

      res.json({ entry });
    } catch (error) {
      console.error('Failed to get journal entry:', error);
      res.status(500).json({ error: 'Failed to get journal entry.' });
    }
  },

  updateJournalEntry: async (req, res) => {
    try {
      const entryId = req.params.id;
      const { title, username, entry_date, entry_content, destination_id } = req.body;

      const entry = await JournalEntry.findByPk(entryId);
      if (!entry) {
        return res.status(404).json({ error: 'Journal entry not found.' });
      }

      await entry.update({
        title,
        username,
        entry_date,
        entry_content,
        destination_id,
      });

      res.json({ entry });
    } catch (error) {
      console.error('Failed to update journal entry:', error);
      res.status(500).json({ error: 'Failed to update journal entry.' });
    }
  },

  deleteJournalEntry: async (req, res) => {
    try {
      const entryId = req.params.id;
      const entry = await JournalEntry.findByPk(entryId);

      if (!entry) {
        return res.status(404).json({ error: 'Journal entry not found.' });
      }

      await entry.destroy();

      res.json({ message: 'Journal entry deleted successfully.' });
    } catch (error) {
      console.error('Failed to delete journal entry:', error);
      res.status(500).json({ error: 'Failed to delete journal entry.' });
    }
  },

  searchEntriesByTitle: async (req, res) => {
    const { title } = req.query;

    try {
      const entries = await JournalEntry.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
      });

      res.json(entries);
    } catch (error) {
      console.error('Error searching journal entries:', error);
      res.status(500).json({ error: 'Error searching journal entries.' });
    }
  },
};

module.exports = JournalController;

