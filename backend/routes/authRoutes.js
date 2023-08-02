// npm being used
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const secretKey = 'your-secret-key'; // replace with a secret key?????

// user authentication routes (registration, login, etc.) go here
// Set up Multer for handling file uploads (profile pictures)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage });
  
  // **chris** replace this with database / user data 
  const users = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      password: '$2b$18e60vrJsbC', // hashed password = ?
      profilePicture: 'default-profile.png',
    },
  ];
  
  // Login ** username and password **
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  // JWT token generation
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    const { password: _, ...userData } = user;
    res.json({ token, user: userData });
  });


  // signup   ***hashpassword***
  router.post('/signup', upload.single('profilePicture'), (req, res) => {
    const { username, email, password } = req.body;
    if (users.some((user) => user.username === username || user.email === email)) {
      return res.status(409).json({ error: 'Username or email already exists' });
    }
  //  hashpassword 
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password: hashedPassword,
      profilePicture: req.file ? req.file.filename : 'default-profile.png',
    };
 //   new user
    users.push(newUser);
    const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '1h' });
    const { password: _, ...userData } = newUser;
    res.json({ token, user: userData });
  });
  
  module.exports = router;

// link to controller js file  to handle user requests *****