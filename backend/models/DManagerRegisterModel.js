const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//front end eken ena data schema eke store karano
const DManagerRegisterSchema = new Schema({
  name: {
    type: String, //datatype
    required: true, //validate
  },
  gmail: {
    type: String, //datatype
    required: true, //validate
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "DManagerRegistration", //file name(database table name)
  DManagerRegisterSchema //function
);
