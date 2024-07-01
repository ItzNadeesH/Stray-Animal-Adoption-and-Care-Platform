const mongoose = require("mongoose");
const { link } = require("../Routes/DonationRouter");

const notificationSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   },
   link: {
      type: String,
      required: true
   },
   status: {
      type: String,
      enum: ["unread", "read"],
      default: "unread"
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model("Notification", notificationSchema);