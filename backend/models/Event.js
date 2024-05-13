const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
   _id: String,
   name: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   date: {
      type: String,
      required: true,
   },
   start_time: {
      type: String,
      required: true,
   },
   end_time: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   image: {
      type: String,
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
   },
   fundState: {
      type: String,
      enum: ['NONE', 'PENDING', 'APPROVED', 'REJECTED'],
      default: 'NONE',
   },
   state: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'INACTIVE',
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('event', EventSchema);