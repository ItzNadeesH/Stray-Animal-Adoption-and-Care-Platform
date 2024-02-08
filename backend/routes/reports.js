const express = require('express');

const router = express.Router();

// @route   POST api/report
// @desc    get report
// @access  Private
router.post('/', async (req, res) => {
  res.send('');
});

module.exports = router;
