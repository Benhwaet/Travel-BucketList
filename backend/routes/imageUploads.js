const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs'); // Don't forget to require fs module
const dotenv = require('dotenv');


dotenv.config();

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    // Upload image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    // Delete the temporarily uploaded image from the server to save disk space
    fs.unlinkSync(req.file.path);

    // Respond with Cloudinary upload result
    res.json(uploadResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;
