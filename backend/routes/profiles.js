const express = require('express');
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');

const router = express.Router();

// @route   PUT api/profiles
// @desc    Edit Profile
// @access  Private
router.post('/', auth, async (req, res) => {
  const { firstname, lastname, address, city, postcode, phone } = req.body;

  const profileFields = {};
  profileFields.user = req.user.id;
  if (firstname) profileFields.firstname = firstname;
  if (lastname) profileFields.lastname = lastname;
  if (address) profileFields.address = address;
  if (city) profileFields.city = city;
  if (postcode) profileFields.postcode = postcode;
  if (phone) profileFields.phone = phone;

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

module.exports = router;
