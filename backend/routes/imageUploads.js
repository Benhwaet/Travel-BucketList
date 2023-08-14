const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


router.get('/get_upload_url', (req, res) => {
  try {
    const timestamp = Math.floor(Date.now() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
        upload_preset: 'ml_default',
      },
      process.env.CLOUDINARY_API_SECRET
    );

    const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`;

    res.json({
      uploadUrl,
      timestamp,
      signature,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate signed upload URL' });
  }
});

module.exports = router;
