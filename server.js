require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dbConfig = require('./backend/config/db.config');
const cors = require('cors');
const router = express.Router();
const Sequelize = require("sequelize");
const sequelize = require('./connection');
const bodyParser = require('body-parser');


app.use(express.json());

//app.use(express.static(__dirname + '/public'));;

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

const imageUpload = require('./backend/routes/imageUploads');
app.use('/api/image-uploads', imageUpload);

const journalRoutes = require('./backend/routes/journalRoutes');
app.use('/api/journal', journalRoutes)


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const multer = require('multer');
const cloudinary = require('./backend/config/db.config'); // cloudinary config
app.use(express.json());

// multer for handling file uploads
const upload = multer({ dest: 'tmp/' });

// route for image upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // uploads image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'travel_bucket', // our folder on cloudinary
    });

    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Image upload error:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
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