// configuration data for the database, 
// database host, port, name, username, and password.

module.exports = {
    development: {
      username: process.env.DB_USERNAME || '',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'travelBucket_db',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql'
    },
    production: {
      use_env_variable: 'DATABASE', // We will get this from heroku when we deploy
      dialect: 'mysql'
    }
  };