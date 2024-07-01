const express = require("express");
const router = express.Router();
const DonationForm = require("../models/DonationForm");

// Get all donation forms
router.get("/", async (req, res) => {
  try {
    const donationForms = await DonationForm.find();
    res.json(donationForms);
  } catch (error) {
    console.error("Error fetching donation forms:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
