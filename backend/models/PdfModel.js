//matheeshadias pdf
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//front end eken ena data schema eke store karano
const PdfSchema = new Schema({
  pdf: {
    type: String, //datatype
    required: true, //validate
  },
  title: {
    type: String, //datatype
    required: true, //validate
  },
});

module.exports = mongoose.model(
  "PdfDetails", //file name(database table name)
  PdfSchema //function
);
