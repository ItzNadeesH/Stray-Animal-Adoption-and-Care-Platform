const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServicesfeedbackSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(
    "ServicesfeedbackModel", // file name
    ServicesfeedbackSchema // function name
);
