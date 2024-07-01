const DoctorfeedbackModel = require("../models/DoctorfeedbackModel");


const getAllDoctorfeedback = async (req, res, next) => {
    try {
        const doctorFeedback = await DoctorfeedbackModel.find();
        if (!doctorFeedback) {
            return res.status(404).json({ message: "Doctor feedback not found" });
        }
        return res.status(200).json({ doctorFeedback });
    } catch (error) {
        console.error("Error retrieving doctor feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const addDoctorfeedback = async (req, res, next) => {
    const { customerName, customerEmail, doctorName, doctorRating, doctorrfeedback } = req.body;
    if (!doctorrfeedback) {
        return res.status(400).json({ message: "Doctor feedback is required" });
    }
    try {
        const newFeedback = new DoctorfeedbackModel({ customerName, customerEmail, doctorName, doctorRating, doctorrfeedback });
        await newFeedback.save();
        return res.status(200).json({ message: "Feedback added successfully", feedback: newFeedback });
    } catch (error) {
        console.error("Error adding feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};




//get by id

const getByID = async (req, res, next) => {
    
    const id = req.params.id;

    let Doctorfeedback; 

    try {
        Doctorfeedback = await DoctorfeedbackModel.findById(id); 
    } catch (err) {
        console.log(err);
    }
   
    if (!Doctorfeedback) {
        return res.status(404).json({ message: "Doctor feedback not found" });
    }
    
    return res.status(200).json({ Doctorfeedback });
}


const updateDoctorfeedback = async (req, res, next) => {
    const id = req.params.id;
    const { customerName, customerEmail, doctorName, doctorRating, doctorrfeedback } = req.body;
    try {
        let updatedFeedback = await DoctorfeedbackModel.findByIdAndUpdate(id, {
            customerName,
            customerEmail,
            doctorName,
            doctorRating,
            doctorrfeedback
        });
        updatedFeedback = await updatedFeedback.save();
        return res.status(200).json({ message: "Feedback updated successfully", feedback: updatedFeedback });
    } catch (error) {
        console.error("Error updating feedback:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


const deleteDoctorFeedback = async (req, res, next) => {

    const id = req.params.id;

    let Doctorfeedback; 

    try {
        Doctorfeedback = await DoctorfeedbackModel.findByIdAndDelete(id); 
    } catch (err) {
        console.log(err);
    }

    if (!Doctorfeedback) {
        return res.status(404).json({ message: "Unable to delete doctor feedback" });
    }
    
    return res.status(200).json({ Doctorfeedback });
}

const updateStatus = async (req, res, next) => {
    const id = req.params.id;
    const { status } = req.body;
    try {
        let updatedFeedback = await DoctorfeedbackModel.findByIdAndUpdate(id, { status }, { new: true });
        return res.status(200).json({ message: "Status updated successfully", feedback: updatedFeedback });
    } catch (error) {
        console.error("Error updating status:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};




exports.getAllDoctorfeedback = getAllDoctorfeedback;
exports.addDoctorfeedback = addDoctorfeedback;
exports.getByID = getByID;
exports.updateDoctorfeedback = updateDoctorfeedback;
exports.deleteDoctorfeedback = deleteDoctorFeedback;
exports.updateStatus = updateStatus;
