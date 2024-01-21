const express = require('express');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET api/auth
// @desc    Authenticate
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (err) {
    console.error(err.meesage);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/auth
// @desc    Login
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email address').isEmail(),
    check('password', 'Password cannot be empty').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Incorrect password' }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '1d' },
        (error, token) => {
          if (error) throw error;
          res.status(200).json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
