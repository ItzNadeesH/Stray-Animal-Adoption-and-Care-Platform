const express = require('express');
const appointmentController = require('../Controller/appointment');
const router = express.Router();

router.get("/", appointmentController.getAppointments);
router.get("/:id", appointmentController.getAppointment);
router.post("/", appointmentController.createAppointment);
router.put("/:id", appointmentController.updateAppointment);
router.delete("/del/:id", appointmentController.deleteStateAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;
