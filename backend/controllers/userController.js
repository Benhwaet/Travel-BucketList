//  handles user login, user registration
// via database models  to perform user operations ?

//copy pasted from class notes, edX module 14, activity 19
// userController.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { User } = require('../models');

const userController = {
  signup: async (req, res) => {
    const { email, username, password } = req.body;
    try {
      const userExists = await User.findOne({
        where: {
          [Op.or]: [
            { email: email },
            { username: username }
          ]
        }
      });

      if (userExists) {
        return res.status(409).json({ error: 'Username or email already exists' });
      }

      console.log('Creating a new user...');
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Hashing password...');
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log('Creating user in the database...');
      const newUser = await User.create({
        email: email,
        username: username,
        password: hashedPassword,
        profile_picture: req.file ? req.file.filename : 'default-profile.png'
      });

      const { password: _, ...userData } = newUser;
      console.log('User created successfully:', userData);
      res.json({ user: userData });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const validPassword = await bcrypt.compare(password.trim(), user.password.trim());
      console.log('Password Comparison Result:', validPassword);
      if (!validPassword) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Login error' });
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
