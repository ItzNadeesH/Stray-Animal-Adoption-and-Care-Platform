const mongoose = require('mongoose');

const AdoptionSchema = new mongoose.Schema({
   _id: String,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
   },
   animal: {
      type: String,
      ref: 'animal',
   },
   applicant_name: {
      type: String,
      required: true,
   },
   spouse_name: {
      type: String,
      required: true,
   },
   applicant_occupation: {
      type: String,
      required: true,
   },
   spouse_occupation: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   address: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   cell: {
      type: String,
      required: true,
   },
   no_of_children: {
      type: Number,
      required: true,
   },
   no_of_adults: {
      type: Number,
      required: true,
   },
   animal_cruelty: {
      type: String,
      required: true,
   },
   animal_cruelty_explanation: {
      type: String,
      required: true,
   },
   state: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'REJECTED', 'COMPLETED'],
      default: 'PENDING',
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('adoption', AdoptionSchema);