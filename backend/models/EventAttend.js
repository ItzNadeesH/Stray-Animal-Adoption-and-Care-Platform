const mongoose = require('mongoose');

const EventAttendSchema = new mongoose.Schema({
   event: {
      type: String,
      ref: 'event',
   },
   email: {
      type: String,
      required: true,
   },
   mobile: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('eventAttend', EventAttendSchema);