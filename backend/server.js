const express = require('express');
const app = express();
const dbConfig = require('./config/db.config');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.production);

// Load models
const JournalEntry = require('./models/journalEntry');
const TravelDestination = require('./models/travelDestination');
const User = require('./models/User');

// Sync models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

// Middleware
app.use(express.json());

// Include the authRoutes.js middleware
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Include the journalRoutes.js middleware
const journalRoutes = require('./routes/journalRoutes');
app.use('/api/journals', journalRoutes);

// Include the travelDestinationRoutes.js middleware
const travelDestinationRoutes = require('./routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);

// Use the routes
app.use('/api/other1', Routes1);
// app.use('/api/other2', Routes2);
// ... use other routes as needed

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});