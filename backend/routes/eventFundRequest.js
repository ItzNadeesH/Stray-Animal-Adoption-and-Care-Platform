const express = require('express');
const eventFundRequestController = require('../Controller/eventFundRequest');
const router = express.Router();

router.get("/events/", eventFundRequestController.getEventFundRequests2);
router.get("/", eventFundRequestController.getEventFundRequests);
router.get("/:id", eventFundRequestController.getEventFundRequest);
router.post("/", eventFundRequestController.createEventFundRequest);
router.put("/:id", eventFundRequestController.updateEventFundRequest);
router.delete("/:id", eventFundRequestController.deleteEventFundRequest);


module.exports = router;