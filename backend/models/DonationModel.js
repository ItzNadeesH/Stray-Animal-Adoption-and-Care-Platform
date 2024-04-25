const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//front end eken ena data schema eke store karano
const donationSchema = new Schema({
  donorname: {
    type: String, //datatype
    required: true, //validate
  },
  donoremail: {
    type: String, //datatype
    required: true, //validate
  },
  message: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "DonationModel", //file name
  donationSchema //function
);
