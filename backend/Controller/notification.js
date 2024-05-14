const Notification = require("../models/Notification");

const createNotification = async (req, res) => {
   const { title, message, sender, receiver } = req.body;
   if (!title || !message || !sender) {
      return res.status(400).json({ error: true, message: "Please fill all fields" });
   }
   try {
      const notification = await Notification.create({ title, message, sender, receiver });
      return res.status(200).json(notification);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getNotification = async (req, res) => {
   try {
      const notification = await Notification.find();
      return res.status(200).json(notification);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getNotificationById = async (req, res) => {
   const { id } = req.params;
   try {
      const notification = await Notification.findById(id);
      return res.status(200).json(notification);
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getNotificationByReceiver = async (req, res) => {
   const { id } = req.params;
   try {
      const notification = await Notification.find({ user: id });
      return res.status(200).json(notification);
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getNotificationByReceiverUnread = async (req, res) => {
   const { id } = req.params;
   try {
      const notification = await Notification.find({ user: id, status: "unread" });
      return res.status(200).json(notification);
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const updateNotification = async (req, res) => {
   const { id } = req.params;
   const { title, message, user, status } = req.body;
   if (!title || !message || !user || !status) {
      return res.status(400).json({ error: true, message: "Please fill all fields" });
   }
   try {
      const notification = await Notification.findByIdAndUpdate(id, { title, message, user, status }, { new: true });
      return res.status(200).json(notification);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const deleteNotification = async (req, res) => {
   const { id } = req.params;
   try {
      await Notification.findByIdAndDelete(id);
      return res.status(200).json({ error: false, message: "Notification deleted successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

module.exports = {
   createNotification,
   getNotification,
   getNotificationById,
   getNotificationByReceiver,
   updateNotification,
   deleteNotification,
   getNotificationByReceiverUnread
}