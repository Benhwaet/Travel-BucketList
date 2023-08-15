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

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDINARYSECRET,
  secure: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/get-signature', (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp
    },
    cloudinary.api_secret
  );
  res.json({ timestamp, signature });
});

app.post('/do-something-with-photo', async (req, res) => {
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id: req.body.public_id, version: req.body.version },
    cloudinary.api_secret
  );

  if (expectedSignature === req.body.signature) {
    await fse.ensureFile('./data.txt');
    const existingData = await fse.readFile('./data.txt', 'utf8');
    await fse.outputFile('./data.txt', existingData + req.body.public_id + '\n');
  }
  res.status(200).send('Photo data processed.');
});

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