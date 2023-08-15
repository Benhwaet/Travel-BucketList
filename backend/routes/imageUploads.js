const express = require('express');
const multer = require('multer');
const router = express.Router();
const signature = require('../models')
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudName = cloudinary.config().cloud_name;
const apiKey = cloudinary.config().api_key;

router.get('/', function (req, res, next) {
  const sig = signature.signuploadform()
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp,
    cloudname: cloudName,
    apikey: apiKey
  })
})

module.exports = router

