const mongoose = require('mongoose');

const VolunteerRequestSchema = new mongoose.Schema({
   _id: String,
   skill: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   district: {
      type: String,
      required: true,
   },
   maxVolunteers: {
      type: Number,
      required: true,
   },
   onDate: {
      type: String,
      required: true,
   },
   state: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
      default: 'ACTIVE',
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('volunteerRequest', VolunteerRequestSchema);