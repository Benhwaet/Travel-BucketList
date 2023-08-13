// userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const multer = require('multer');
const router = express.Router();
const { User } = require('../models'); 
const secretKey = 'replace-with-a-secure-secret-key';


router.get('/users', userController.getAllUsers);

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

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
