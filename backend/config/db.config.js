// configuration data for the database, 
// database host, port, name, username, and password.

require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'Jcmn@1hU00*',
        database: process.env.DB_NAME || 'travelBucket_db',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
    },
    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql'
    }
};


// cloudinary config
const cloudinary = require('cloudinary').v2;
          
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

module.exports = cloudinary;