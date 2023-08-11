require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = require('./connection');

app.use(express.json());

const homeRoutes = require('./backend/controllers/home-routes');
app.use('/', homeRoutes);

const authRoutes = require('./backend/routes/authRoutes');
app.use('/api/auth', authRoutes);

const travelDestinationRoutes = require('./backend/routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);

const imageUpload = require('./backend/routes/imageUploads');
app.use('/api', imageUpload);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
  sequelize.sync({ force: false })
    .then(() => {
      console.log('Database synced successfully.');
    })
    .catch((err) => {
      console.error('Error syncing the database:', err);
    });
});
