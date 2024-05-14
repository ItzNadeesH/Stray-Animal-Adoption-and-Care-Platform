const VolunteerRequest = require('../models/VolunteerRequest');
const volunteerResponds = require('../models/VolunteerRespond');
const User = require('../models/User');
const Notification = require('../models/Notification');
const VolunteerRespond = require('../models/VolunteerRespond');

const getVolunteerRequests = async (req, res) => {
   try {
      const volunteerRequests = await VolunteerRequest.find();

      let updatedVolunteerRequests = [];
      for (let i = 0; i < volunteerRequests.length; i++) {
         const volunteerRespond = await volunteerResponds.find({ volunteerRequest: volunteerRequests[i]._id });
         updatedVolunteerRequests.push({ ...volunteerRequests[i]._doc, volunteers: volunteerRespond.length });
      }
      return res.status(200).json(updatedVolunteerRequests);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getVolunteerRequest = async (req, res) => {
   try {
      const { id } = req.params;
      const volunteerRequest = await VolunteerRequest.findById(id);
      if (!volunteerRequest) {
         return res.status(404).json({ error: true, message: "Volunteer Request not found" });
      }
      return res.status(200).json(volunteerRequest);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const createVolunteerRequest = async (req, res) => {
   try {
      const { skill, description, district, maxVolunteers, onDate } = req.body;
      const key = await IncrementKey.findOne({ key: 'VOLUNTEER_REQUEST' });
      key.value = key.value + 1;
      await key.save();
      const _id = 'VRES_' + (key.value);
      const newVolunteerRequest = new VolunteerRequest({
         _id,
         skill,
         description,
         district,
         maxVolunteers,
         onDate,
      });
      const a = await newVolunteerRequest.save();
      return res.status(200).json(a);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const updateVolunteerRequest = async (req, res) => {
   try {
      const { id } = req.params;
      const { skill, description, district, maxVolunteers, onDate } = req.body;
      const volunteerRequest = await VolunteerRequest.findById(id);
      if (!volunteerRequest) {
         return res.status(404).json({ error: true, message: "VolunteerRequest not found" });
      }
      volunteerRequest.skill = skill;
      volunteerRequest.description = description;
      volunteerRequest.district = district;
      volunteerRequest.maxVolunteers = maxVolunteers;
      volunteerRequest.onDate = onDate;
      await volunteerRequest.save();
      return res.status(200).json(volunteerRequest);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const deleteVolunteerRequest = async (req, res) => {
   try {
      const { id } = req.params;
      const volunteerRequest = await VolunteerRequest.findById(id);
      if (!volunteerRequest) {
         return res.status(404).json({ error: true, message: "Volunteer Request not found" });
      }
      const volunteerResponds = await VolunteerRespond.find({ volunteerRequest: id });
      volunteerResponds.forEach(async (volunteerRespond) => {
         const u = await User.findById(volunteerRespond.user);
         const notification = new Notification({
            user: u._id,
            title: "Volunteer Request Deleted",
            message: `Your volunteer request for ${volunteerRequest.skill} has been deleted`,
            link: "/profile",
         });
         await notification.save();
         await volunteerRespond.deleteOne();
      });
      await volunteerRequest.deleteOne();
      return res.status(200).json({ error: false, message: "Volunteer Request deleted successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

module.exports = {
   getVolunteerRequests,
   getVolunteerRequest,
   createVolunteerRequest,
   updateVolunteerRequest,
   deleteVolunteerRequest,
};