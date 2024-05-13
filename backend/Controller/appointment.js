const Animal = require('../models/Animal');
const Notification = require('../models/Notification');
const User = require('../models/User');
const Appointment = require('../models/appointment');

const getAppointments = async (req, res) => {
   try {
      const appointments = await Appointment.find();
      let updatedAppointments = [];
      for (let i = 0; i < appointments.length; i++) {
         const animal = await Animal.findById(appointments[i].animal);
         updatedAppointments.push({ ...appointments[i]._doc, animalData: animal });
      }
      return res.status(200).json(updatedAppointments);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}


const getAppointment = async (req, res) => {
   try {
      const { id } = req.params;
      const appointment = await Appointment.findById(id);
      if (!appointment) {
         return res.status(404).json({ error: true, message: "Appointment not found" });
      }
      return res.status(200).json(appointment);
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const createAppointment = async (req, res) => {
   try {
      let appointment = new Appointment(req.body);
      const isPending = await Appointment.findOne({ animal: appointment.animal, state: 'PENDING' });
      if (isPending) {
         return res.status(400).json({ error: true, message: "There is already a pending appointment for this animal" });
      }
      const isApproved = await Appointment.findOne({ animal: appointment.animal, state: 'APPROVED' });
      if (isApproved) {
         return res.status(400).json({ error: true, message: "This animal has an approved appointment" });
      }
      appointment.reason = "-";
      await appointment.save();
      const notifyUsers = await User.find({ role: 'DOCTOR' });
      notifyUsers.forEach(async (user) => {
         const notification = new Notification({
            user: user._id,
            title: "New Appointment Added",
            message: `A new appointment has been added for [${appointment.animal}] on [${appointment.requestedDate}]. Please check the appointments page for more details.`,
            link: "/admin/appointment/manage",
         });
         await notification.save();
      });
      return res.status(200).json({ error: false, message: "Appointment created successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const updateAppointment = async (req, res) => {
   try {
      const { id } = req.params;
      const appointment = await Appointment
         .findByIdAndUpdate(id, req.body, { new: true });
      if (!appointment) {
         return res.status(404).json({ error: true, message: "Appointment not found" });
      }
      return res.status(200).json({ error: false, message: "Appointment updated successfully" });
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const deleteAppointment = async (req, res) => {
   try {
      const { id } = req.params;
      const appointment = await Appointment.findById(id);
      if (!appointment) {
         return res.status(404).json({ error: true, message: "Appointment not found" });
      }
      await appointment.deleteOne();
      return res.status(200).json({ error: false, message: "Appointment deleted successfully" });
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const deleteStateAppointment = async (req, res) => {
   try {
      const { id } = req.params;
      const appointment = await Appointment
         .findByIdAndUpdate(id, { state: 'DELETED' });
      if (!appointment) {
         return res.status(404).json({ error: true, message: "Appointment not found" });
      }
      const notifyUsers = await User.find({ role: 'SHELTER_OWNER' });
      notifyUsers.forEach(async (user) => {
         const notification = new Notification({
            user: user._id,
            title: "Appointment Status Updated",
            message: `The appointment for [${appointment.animal}] on [${appointment.requestedDate}] has been deleted by the doctor.`,
            link: "/admin/animal/manage",
         });
         await notification.save();
      });
      return res.status(200).json({ error: false, message: "Appointment updated successfully" });
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}


module.exports = {
   getAppointments,
   getAppointment,
   createAppointment,
   updateAppointment,
   deleteAppointment,
   deleteStateAppointment
}

