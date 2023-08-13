//  handles user login, user registration
// via database models  to perform user operations ?

//copy pasted from class notes, edX module 14, activity 19
// userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { Op } = require('sequelize');
const secretKey = 'replace-with-a-secure-secret-key';
const { User } = require('../models');

const userController = {
  signup: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const userExists = await User.findOne({
        where: {
          [Op.or]: [
            { username: username },
            { email: email }
          ]
        }
      });

      if (userExists) {
        return res.status(409).json({ error: 'Username or email already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username: username,
        email: email,
        password: hashedPassword,
        profile_picture: req.file ? req.file.filename : 'default-profile.png'
      });

      const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '1h' });
      const { password: _, ...userData } = newUser;
      res.json({ token, user: userData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating user' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = userController;


