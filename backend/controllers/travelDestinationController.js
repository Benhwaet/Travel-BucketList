// handles requests related to travel destinations
//  fetch destinations, add new ones, and manage destination

const axios = require('axios');
const Destination = require('../models/travelDestination');

const API_URL = '' // Will fill out the API once i find a suitable one

const DestinationController = {
// Creating a new destination
    createDestination: async (req, res) => {
        try {
            const { name, description, photo, country, continent, category } = req.body;
            const newDestination = {
                name,
                description,
                photo,
                country,
                continent,
                category,
            };
            const response = await axios.post(API_URL)
            const destination = response.data;
            res.status(201).json ({ destination });
        }   catch (error) {
            res.status(500).json({ error: 'Failed to create destination' });
        }
    },

// Get all Destinations

    getAllDestinations: async (req, res) => {
        try {
            const destinationId = req.params.id;
            const response = await axios.get('${API_URL/${destinationId');
            const destination = response.data;
            if (!destination) {
                return res.status(404).json({ error: 'Destination not found' });
            }
            res.json({ destination });
        }   catch (error) {
            res.status(500).json({ error: 'Failed to get destination '});
        }
    }
};

module.exports = DestinationController;