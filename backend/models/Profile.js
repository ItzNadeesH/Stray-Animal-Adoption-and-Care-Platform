const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  postcode: {
    type: String,
  },
  phone: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('profile', ProfileSchema);
