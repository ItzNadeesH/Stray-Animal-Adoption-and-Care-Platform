const mongoose = require('mongoose');

const EventFundRequestSchema = new mongoose.Schema({
   event: {
      type: String,
      ref: 'event',
   },
   fundAmount: {
      type: Number,
      required: true,
   },
   fundState: {
      type: String,
      enum: ['PENDING', 'APPROVED', 'REJECTED'],
      default: 'PENDING',
   },
}, {
   timestamps: true,
});

module.exports = mongoose.model('eventFundRequest', EventFundRequestSchema);