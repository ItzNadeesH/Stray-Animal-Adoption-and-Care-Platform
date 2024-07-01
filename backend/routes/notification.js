const express = require('express');
const router = express.Router();
const notificationController = require('../Controller/notification');

router.get("/", notificationController.getNotification);
router.get("/:id", notificationController.getNotificationById);
router.get("/receiver/:id", notificationController.getNotificationByReceiver);
router.post("/", notificationController.createNotification);
router.put("/:id", notificationController.updateNotification);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
