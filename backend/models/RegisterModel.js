const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//front end eken ena data schema eke store karano
const RegisterSchema = new Schema({
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
  "Registration", //file name(database table name)
  RegisterSchema //function
);
