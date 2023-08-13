// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const multer = require('multer');
const router = express.Router();
const { User } = require('../models'); 
const secretKey = 'replace-with-a-secure-secret-key';
const bcrypt = require('bcrypt');


router.get('/users', userController.getAllUsers);

// Login
router.post('/login', userController.login);

// // Signup
router.post('/signup', async (req, res) => {
  console.log(req.body); 
  await userController.signup(req, res);
});
// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
