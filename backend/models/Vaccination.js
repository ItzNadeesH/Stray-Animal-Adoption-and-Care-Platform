const mongoose = require('mongoose');

const VaccinationSchema = new mongoose.Schema({
   animal: {
      type: String,
      ref: 'animal',
   },
   vaccine: {
      type: String,
      ref: 'vaccine',
   },
   state: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'REJECTED', 'COMPLETED'],
      default: 'COMPLETED',
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('vaccination', VaccinationSchema);