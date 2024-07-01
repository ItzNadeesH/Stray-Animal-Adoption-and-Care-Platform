const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorfeedbackSchema = new Schema({
    userId: {
        type: String,
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    doctorRating: {
        type: Number,
        required: true
    },
    doctorrfeedback: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model(
    "DoctorfeedbackModel",
    DoctorfeedbackSchema
);
