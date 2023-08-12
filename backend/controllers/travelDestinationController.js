// handles requests related to travel destinations
//  fetch destinations, add new ones, and manage destination

const seedDestinations = require('../seeds/travelDestinationSeed.js');

const DestinationController = {
  // Create a new destination
  createDestination: async (req, res) => {
    try {
      const { destination_id, name, country, continent, image, description, categories, notes, visited } = req.body;
      const newDestination = {
        destination_id,
        name,
        country,
        continent,
        image,
        description,
        categories,
        notes,
        visited
      };

      seedDestinations.push(newDestination);

      res.status(201).json({ destination: newDestination });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create destination.' });
    }
  },

  // Get all destinations
  getAllDestinations: async (req, res) => {
    try {
      res.json({ destinations: seedDestinations });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get destinations.' });
    }
  },

  // Get a destination by ID
  getDestinationById: async (req, res) => {
    try {
      const destinationId = req.params.id;
      const destination = seedDestinations.find(dest => dest.destination_id === parseInt(destinationId));

      if (!destination) {
        return res.status(404).json({ error: 'Destination not found.' });
      }

      res.json({ destination });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get destination.' });
    }
  },

  // Update a destination by ID
  updateDestination: async (req, res) => {
    try {
      const destinationId = req.params.id;
      const { destination_id, name, country, continent, image, description, categories, notes, visited } = req.body;
      const updatedDestination = {
        destination_id,
        name,
        country,
        continent,
        image,
        description,
        categories,
        notes,
        visited
      };

      const index = seedDestinations.findIndex(dest => dest.destination_id === parseInt(destinationId));
      if (index === -1) {
        return res.status(404).json({ error: 'Destination not found.' });
      }

      seedDestinations[index] = updatedDestination;

      res.json({ destination: updatedDestination });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update destination.' });
    }
  },

  // Delete a destination by ID
  deleteDestination: async (req, res) => {
    try {
      const destinationId = req.params.id;
      const index = seedDestinations.findIndex(dest => dest.destination_id === parseInt(destinationId));

      if (index === -1) {
        return res.status(404).json({ error: 'Destination not found.' });
      }

      seedDestinations.splice(index, 1);

      res.json({ message: 'Destination deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete destination.' });
    }
  },
};

module.exports = DestinationController;
