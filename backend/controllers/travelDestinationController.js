const TravelDestination = require('../models/travelDestination');

const DestinationController = {
  createDestination: async (req, res) => {
    try {
      const { name, country, continent, image, description, categories, notes, visited } = req.body;
      const newDestination = await TravelDestination.create({
        name,
        country,
        continent,
        image,
        description,
        categories,
        notes,
        visited
      });

      res.status(201).json({ destination: newDestination });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create destination.' });
    }
  },

  getAllDestinations: async (req, res) => {
    try {
      const destinations = await TravelDestination.findAll();
      res.json({ destinations });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get destinations.' });
    }
  },

  getDestinationById: async (req, res) => {
    try {
      const destinationId = req.params.id;
      const destination = await TravelDestination.findByPk(destinationId);

      if (!destination) {
        return res.status(404).json({ error: 'Destination not found.' });
      }

      res.json({ destination });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get destination.' });
    }
  },

  updateDestination: async (req, res) => {
    try {
      const destinationId = req.params.id;
      const { name, country, continent, image, description, categories, notes, visited } = req.body;
      
      const destination = await TravelDestination.findByPk(destinationId);
      if (!destination) {
        return res.status(404).json({ error: 'Destination not found.' });
      }

      await destination.update({
        name,
        country,
        continent,
        image,
        description,
        categories,
        notes,
        visited
      });

      res.json({ destination });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update destination.' });
    }
  },

  deleteDestination: async (req, res) => {
    try {
      const destinationId = req.params.id;
      const destination = await TravelDestination.findByPk(destinationId);

      if (!destination) {
        return res.status(404).json({ error: 'Destination not found.' });
      }

      await destination.destroy();

      res.json({ message: 'Destination deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete destination.' });
    }
  },
};

module.exports = DestinationController;
