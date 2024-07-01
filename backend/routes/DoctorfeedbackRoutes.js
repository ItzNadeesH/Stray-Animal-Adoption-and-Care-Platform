const express = require("express");
const router = express.Router();
//insert Modle
const Doctorfeedback = require("../models/DoctorfeedbackModel"); 
//insert controllers
const DoctorfeedbackController = require("../Controller/DoctorfeedbackController"); 

router.get("/",DoctorfeedbackController.getAllDoctorfeedback);
router.post("/",DoctorfeedbackController.addDoctorfeedback);
router.get("/:id",DoctorfeedbackController.getByID);
router.put("/:id",DoctorfeedbackController.updateDoctorfeedback);
router.delete("/:id",DoctorfeedbackController.deleteDoctorfeedback);
router.put("/status/:id", DoctorfeedbackController.updateStatus); 


module.exports = router;

