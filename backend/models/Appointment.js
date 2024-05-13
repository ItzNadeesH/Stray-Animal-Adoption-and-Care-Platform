const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
   animal: {
      type: String,
      ref: 'animal',
      required: true
   },
   requestedDate: {
      type: Date,
      required: true
   },
   reason: {
      type: String,
      required: true
   },
   state: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'REJECTED', 'COMPLETED', 'DELETED'],
      default: 'PENDING'
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('appointment', AppointmentSchema);