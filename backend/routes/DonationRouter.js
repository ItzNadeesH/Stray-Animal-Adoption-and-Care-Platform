const express = require("express");
const router = express.Router();
//insert model
const Donations = require("../Models/DonationModel");

// Function definitions from DonationController.js
const getAllDonations = async (req, res, next) => {
  let Donation;

  //get all donations

  try {
    donations = await Donations.find();
  } catch (err) {
    console.log(err);
  }
  //not found
  if (!donations) {
    return res.status(404).json({
      message: "No donations found",
    });
  }
  //display all donations
  return res.status(200).json({ donations });
};

const addDonations = async (req, res, next) => {
  const { donorname, donoremail, message, address, amount } = req.body;

  let donations;

  try {
    donations = new Donations({
      donorname,
      donoremail,
      message,
      address,
      amount,
    });
    await donations.save();
  } catch (err) {
    console.log(err);
  }
  //dont insert users,when data is not storing in database
  if (!donations) {
    return res.status(404).json({
      message: "unable to add donations",
    });
  }
  return res.status(200).json({ donations });
};

const getById = async (req, res, next) => {
  const id = req.params.id;

  let donation;

  try {
    donation = await Donations.findById(id);
  } catch (err) {
    console.log(err);
  }
  //not availabale donation
  if (!donation) {
    return res.status(404).json({
      message: "No donation found",
    });
  }
  //display single donation
  return res.status(200).json({ donation });
};

const updateDonations = async (req, res, next) => {
  const id = req.params.id;
  const { donorname, donoremail, message, address, amount } = req.body;

  let donation;

  try {
    donation = await Donations.findByIdAndUpdate(id, {
      donorname: donorname,
      donoremail: donoremail,
      message: message,
      address: address,
      amount: amount,
    });
    donation = await donation.save();
  } catch (err) {
    console.log(err);
  }
  //cant update donation
  if (!donation) {
    return res.status(404).json({
      message: "can't update donation ",
    });
  }
  //display single donation
  return res.status(200).json({ donation });
};

const deleteDonation = async (req, res, next) => {
  const id = req.params.id;

  let donation;

  try {
    donation = await Donations.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  //cant delete donation
  if (!donation) {
    return res.status(404).json({
      message: "cant delete donation",
    });
  }
  //display single donation
  return res.status(200).json({ donation });
};

// Routes using the above functions
router.get("/", getAllDonations);
router.post("/", addDonations);
router.get("/:id", getById);
router.put("/:id", updateDonations);
router.delete("/:id", deleteDonation);

module.exports = router;
