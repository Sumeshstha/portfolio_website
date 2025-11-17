const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/users
// @desc    Add a new user/contact message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      message
    });

    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;