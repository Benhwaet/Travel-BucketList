import cloudinary from 'cloudinary';
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // our cloudname
});

export default cloudinary;