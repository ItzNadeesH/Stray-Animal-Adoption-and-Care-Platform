// routes/servicesfeedbackRoutes.js

const express = require("express");
const router = express.Router();
const servicesfeedbackController = require("../Controller/serviceFeedbackController");

router.get("/", servicesfeedbackController.getAllServicesfeedback);
router.get("/:id", servicesfeedbackController.getServicesfeedbackById);
router.post("/", servicesfeedbackController.addServicesfeedback);
router.put("/:id", servicesfeedbackController.updateServicesfeedback);
router.delete("/:id", servicesfeedbackController.deleteServicesfeedback);

module.exports = router;
