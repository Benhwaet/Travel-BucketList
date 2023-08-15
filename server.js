require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbConfig = require('./backend/config/db.config');
const cors = require('cors');
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = require('./connection');
const bodyParser = require('body-parser');
const fse = require('fs-extra');

app.use(express.json());


app.use(express.static('public'));


app.use('/node_modules', express.static('node_modules'));

app.use(cors());

const homeRoutes = require('./backend/controllers/home-routes');
app.use('/', homeRoutes);

//To view user api
const userRoutes = require('./backend/routes/userRoutes');
app.use('/api/user', userRoutes);

const travelDestinationRoutes = require('./backend/routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);


const journalRoutes = require('./backend/routes/journalRoutes');
app.use('/api/journal', journalRoutes)

//// cloudinary


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