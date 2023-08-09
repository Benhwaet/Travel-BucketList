require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const dbConfig = require('./config/db.config');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.production);

const JournalEntry = require('./models/journalEntry');
const TravelDestination = require('./models/travelDestination');
const User = require('./models/User');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

app.use(express.json());

const authRoutes = require('./backend/routes/authRoutes');
app.use('/api/auth', authRoutes);

const journalRoutes = require('./routes/journalRoutes');
app.use('/api/journals', journalRoutes);

const travelDestinationRoutes = require('./routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);

app.use('/api/other1', Routes1);
// app.use('/api/other2', Routes2);
// ... use other routes as needed

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const imageUpload = require('./backend/routes/imageUploads');
app.use('/api', imageUpload);
