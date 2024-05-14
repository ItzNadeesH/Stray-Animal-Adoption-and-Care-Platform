const mongoose = require('mongoose');

const incrementKeySchema = new mongoose.Schema({
   key: {
      type: String,
      required: true,
   },
   value: {
      type: Number,
      required: true,
   },
});

module.exports = mongoose.model('incrementKey', incrementKeySchema);