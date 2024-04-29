// controllers/servicesfeedbackController.js

const ServicesfeedbackModel = require("../models/serviceFeedbackModel");

const addServicesfeedback = async (req, res, next) => {
    const { name, email, rate, description } = req.body;
    if (!name || !email || !rate || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newFeedback = new ServicesfeedbackModel({ name, email, rate, description });
        await newFeedback.save();
        return res.status(201).json({ message: "Feedback added successfully", feedback: newFeedback });
    } catch (error) {
        console.error("Error adding feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getAllServicesfeedback = async (req, res, next) => {
    try {
        const servicesFeedback = await ServicesfeedbackModel.find();
        return res.status(200).json({ servicesFeedback });
    } catch (error) {
        console.error("Error retrieving services feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getServicesfeedbackById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const feedback = await ServicesfeedbackModel.findById(id);
        if (!feedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }
        return res.status(200).json({ feedback });
    } catch (error) {
        console.error("Error retrieving feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const updateServicesfeedback = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, rate, description } = req.body;
    try {
        const updatedFeedback = await ServicesfeedbackModel.findByIdAndUpdate(id, { name, email, rate, description }, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }
        return res.status(200).json({ message: "Feedback updated successfully", feedback: updatedFeedback });
    } catch (error) {
        console.error("Error updating feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteServicesfeedback = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedFeedback = await ServicesfeedbackModel.findByIdAndDelete(id);
        if (!deletedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }
        return res.status(200).json({ message: "Feedback deleted successfully", feedback: deletedFeedback });
    } catch (error) {
        console.error("Error deleting feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    addServicesfeedback,
    getAllServicesfeedback,
    getServicesfeedbackById,
    updateServicesfeedback,
    deleteServicesfeedback
};
