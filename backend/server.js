const path = require('path');
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const router = express.Router();
const dbConfig = require('./config/db.config');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbConfig.development);


sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


const travelDestinationRoutes = require('./routes/travelDestinationRoutes');
app.use('/api/travelDestinations', travelDestinationRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const imageUpload = require('./routes/imageUploads');
app.use('/api', imageUpload);


// sorry i have to put cloudinary here 
// if it needs to be move , please try it its not working for me 
const multer = require('multer');
const cloudinary = require('/backend/config/db.config'); // cloudinary config
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});