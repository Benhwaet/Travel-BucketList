const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2; 
const dotenv = require('dotenv'); 

// start variables from .env file
dotenv.config(); 

const router = express.Router(); 
const upload = multer({ dest: 'uploads/' }); 

// cloudinary account information **do we need secret ? **
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// route to handle image upload
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // upload to cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    // deletes the temporarily uploaded image from the server **saves disk space**
    fs.unlinkSync(req.file.path);

    // cloudinary upload result 
    res.json(uploadResult);
  } catch (error) {
    console.error(error);
    // error 500 reply 
    res.status(500).json({ error: 'Image upload failed' });
  }
});

module.exports = router;
