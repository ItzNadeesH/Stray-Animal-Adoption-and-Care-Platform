const Animal = require('../models/Animal');
const Adoption = require('../models/adoption');
const User = require('../models/User');
const Notification = require('../models/Notification');
const IncrementKey = require('../models/IncrementKey');

const getAdoptions = async (req, res) => {
   try {
      const adoptions = await Adoption.find();
      let updatedAdoptions = [];
      for (let i = 0; i < adoptions.length; i++) {
         const user = await User.findById(adoptions[i].user);
         const animal = await Animal.findById(adoptions[i].animal);
         updatedAdoptions.push({
            adoption: adoptions[i],
            user: user,
            animal: animal,
         });
      }
      return res.status(200).json(updatedAdoptions);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const getAdoption = async (req, res) => {
   try {
      const { id } = req.params;
      const adoption = await Adoption.findById(id);
      if (!adoption) {
         return res.status(404).json({ error: true, message: "Adoption not found" });
      }
      return res.status(200).json(adoption);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

const createAdoption = async (req, res) => {
   try {

      const { animal, user } = req.body;
      const existingAdoption = await Adoption.findOne({ animal: animal, user: user });
      if (existingAdoption) {
         return res.status(400).json({ error: true, message: "This user has already sent a adoption request for this animal" });
      }
      const key = await IncrementKey.findOne({ key: 'ADOPTION' });
      key.value = key.value + 1;
      await key.save();
      const _id = 'ADO_' + (key.value);
      let adoption = new Adoption({ _id, ...req.body });
      await adoption.save();
      const notifyUsers = await User.find({ role: 'SHELTER_OWNER' });
      notifyUsers.forEach(async (user) => {
         const notification = new Notification({
            user: user._id,
            title: "New Adoption Request",
            message: `A new adoption request has been made for the animal [${adoption.animal}]. Please check the adoption page for more details.`,
            link: "/admin/adoption/manage",
         });
         await notification.save();
      });
      return res.status(200).json(adoption);
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

// finalized
const updateAdoption = async (req, res) => {
   try {
      const { id } = req.params;
      const adoption = await Adoption.findById(id);
      const data = req.body;
      if (!adoption) {
         return res.status(404).json({ error: true, message: "Adoption not found" });
      }
      if (adoption.state == 'APPROVED' && data.isAdmin == false) {
         return res.status(400).json({ error: true, message: "You can't update an approved adoption request" });
      }
      if (data.state == 'APPROVED' || data.state == 'COMPLETED') {
         const animal = await Animal.findById(adoption.animal);
         if (!animal) {
            return res.status(404).json({ error: true, message: "Animal not found" });
         }
         animal.state = 'ADOPTED';
         await animal.save();
      } else {
         const animal = await Animal.findById(adoption.animal);
         if (!animal) {
            return res.status(404).json({ error: true, message: "Animal not found" });
         }
         animal.state = 'AVAILABLE';
         await animal.save();
      }

      await Adoption.findByIdAndUpdate(id, data, { useFindAndModify: false });

      const u = await User.findOne({ _id: adoption.user });
      const notification = new Notification({
         user: u._id,
         title: "Adoption Request Updated",
         message: `Your adoption request for the animal [${adoption.animal}] has been updated to [${data.state}] with reason [${data.reason}]. Please check the adoption page for more details.`,
         link: "/profile",
      });
      await notification.save();
      return res.status(200).json({ error: false, message: "Adoption updated successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

// finalized
const deleteAdoption = async (req, res) => {
   try {
      const { id } = req.params;
      const adoption = await Adoption.findById(id);
      if (!adoption) {
         return res.status(404).json({ error: true, message: "Adoption not found" });
      }
      if (adoption.state == 'APPROVED' || adoption.state == 'COMPLETED') {
         return res.status(400).json({ error: true, message: "You can't delete an approved adoption request" });
      }
      await adoption.deleteOne();
      return res.status(200).json({ error: false, message: "Adoption deleted successfully" });
   } catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

module.exports = {
   getAdoptions,
   getAdoption,
   createAdoption,
   updateAdoption,
   deleteAdoption,
};
