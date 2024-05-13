import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   },
   sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   },
   receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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