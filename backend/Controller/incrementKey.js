const IncrementKey = require('../Model/incrementKey');

const incrementKey = async (req, res) => {
   try {
      const { key } = req.params;
      const incrementKey = await IncrementKey.findOne({ key });
      if (!incrementKey) {
         return res.status(404).json({ error: true, message: "Key not found" });
      }
      incrementKey.value += 1;
      await incrementKey.save();
      return res.status(200).json(incrementKey);
   }
   catch (error) {
      return res.status(500).json({ error: true, message: error.message });
   }
}

module.exports = { incrementKey };