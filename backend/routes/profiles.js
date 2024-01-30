const express = require('express');
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');

const router = express.Router();

// @route   POST api/profiles
// @desc    Edit Profile
// @access  Private
router.post('/', auth, async (req, res) => {
  const { avatar, firstname, lastname, address, city, postcode, phone } =
    req.body;

  const profileFields = {};
  profileFields.user = req.user.id;
  profileFields.avatar = avatar;
  profileFields.firstname = firstname;
  profileFields.lastname = lastname;
  profileFields.address = address;
  profileFields.city = city;
  profileFields.postcode = postcode;
  profileFields.phone = phone;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.status(200).json('Updated Successfully');
    }

    profile = new Profile(profileFields);

    await profile.save();

    res.status(200).json('Updated Successfully');
  } catch (error) {
    console.error(error.meesage);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profiles
// @desc    Get current profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'Threre is no profile for this user' });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error(error.meesage);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
