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
// const SequelizeStore = require('connect-session-sequelize')(session.Store);


// const crypto = require('crypto');
// const secret = crypto.randomBytes(32).toString('hex');
// console.log('Generated secret:', secret);

// const sess = {
//   secret: secret,
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));
app.use(express.json());

//app.use(express.static(__dirname + '/public'));;

app.use(express.static('public'));

app.use('/node_modules', express.static('node_modules'));

app.use(cors());

const signuploadform = require('./backend/routes/imageUploads');
app.use('/api/signuploadform', signuploadform)

const homeRoutes = require('./backend/controllers/home-routes');
app.use('/', homeRoutes);

//To view user api
const userRoutes = require('./backend/routes/userRoutes');
app.use('/api/user', userRoutes);

const travelDestinationRoutes = require('./backend/routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);

const imageUpload = require('./backend/routes/imageUploads');
app.use('/api/image-uploads', imageUpload);

const journalRoutes = require('./backend/routes/journalRoutes');
app.use('/api/journal', journalRoutes)


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