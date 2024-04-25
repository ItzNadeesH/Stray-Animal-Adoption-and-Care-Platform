const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaintananceSchema = new Schema({
  formID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Maintanance", MaintananceSchema);
