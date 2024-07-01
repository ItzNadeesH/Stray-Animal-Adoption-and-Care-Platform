const express = require("express");
const router = express.Router();
const Maintanance = require("../Models/MaintananceModel");
const getMaintanance = async (req, res, next) => {
  try {
    const maintanance = await Maintanance.find();
    if (!maintanance) {
      return res.status(404).json({
        message: "No maintenance found",
      });
    }
    return res.status(200).json({ maintanance });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

const addMaintanance = async (req, res, next) => {
  const { formID, date, description, amount } = req.body;

  try {
    const newMaintanance = new Maintanance({
      formID,
      date,
      description,
      amount,
    });
    await newMaintanance.save();
    return res.status(200).json({ newMaintanance });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Unable to add maintenance details",
    });
  }
};

router.get("/", getMaintanance);
router.post("/", addMaintanance);

module.exports = router;
