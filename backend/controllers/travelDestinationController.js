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
        }
    }
};

module.exports = DestinationController;