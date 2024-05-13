const express = require('express');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const userController = require('../Controller/user')

const router = express.Router();

// @route   POST api/users
// @desc    Signup
// @access  Public
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({ username, email, password });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      res.status(200).json({ msg: 'Registered Succesfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   Delete api/users/:id
// @desc    Delete a user
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  if (req.user.id === req.params.id) {
    return res
      .status(300)
      .json({ msg: 'Can not delete current logged in user' });
  }
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'success' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});


router.get("/profile/:id", userController.getProfile);
router.get("/doctor/:id", userController.getDoctorProfile);
router.get("/shelter/:id", userController.getShelterProfile);

module.exports = router;
