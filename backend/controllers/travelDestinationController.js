// handles requests related to travel destinations
//  fetch destinations, add new ones, and manage destination

const Destination = require('../models/TravelDestination');

const API_URL = '' // Will fill out the API once i find a suitable one

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
        const response = await axios.post(API_URL, newDestination);
        const destination = response.data;
        res.status(201).json({ destination });
      } catch (error) {
        res.status(500).json({ error: 'Failed to create destination.' });
      }
    },
  
    // Get all destinations
    getAllDestinations: async (req, res) => {
      try {
        const response = await axios.get(API_URL);
        const destinations = response.data;
        res.json({ destinations });
      } catch (error) {
        res.status(500).json({ error: 'Failed to get destinations.' });
      }
    },
  
    // Get a destination by ID
    getDestinationById: async (req, res) => {
      try {
        const destinationId = req.params.id;
        const response = await axios.get(`${API_URL}/${destinationId}`);
        const destination = response.data;
        if (!destination) {
          return res.status(404).json({ error: 'Destination not found.' });
        }
        res.json({ destination });
      } catch (error) {
        res.status(500).json({ error: 'Failed to get destination.' });
      }
    },
  
    // Update a destination by ID
    updatedDestination: async (req, res) => {
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
        const response = await axios.put(`${API_URL}/${destinationId}`, updatedDestination);
        const destination = response.data;
        res.json({ destination });
      } catch (error) {
        res.status(500).json({ error: 'Failed to update destination.' });
      }
    },
  
    // Delete a destination by ID
    deleteDestination: async (req, res) => {
      try {
        const destinationId = req.params.id;
        await axios.delete(`${API_URL}/${destinationId}`);
        res.json({ message: 'Destination deleted successfully.' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete destination.' });
      }
    },
  };
  
  module.exports = DestinationController;

