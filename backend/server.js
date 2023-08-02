const express = require('express');
const app = express();
const port = 3000;

//  user data 

app.use(express.json());

// Include the authRoutes.js middleware
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// leaving this section as a place holder till its set up

// ... other routes and middleware ** dunno if this is right **
// const Routes1 = require('./routes/Routes1');
// const Routes2 = require('./routes/Routes2');
// ... add more routes as needed

// Use the routes
// app.use('/api/other1', Routes1);
// app.use('/api/other2', Routes2);
// ... use other routes as needed

// middleware for error , respond with a generic "Internal server error" message if found
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal server error' });
// });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});