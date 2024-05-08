const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: String,
  date: Date,
  items: [{
    description: String,
    amount: Number
  }],
  totalamount: Number
});

module.exports = mongoose.model('Invoice', invoiceSchema);
