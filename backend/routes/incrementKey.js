const express = require('express');
const incrementKeyController = require('../Controller/incrementKey');
const router = express.Router();

router.get("/:key", incrementKeyController.incrementKey);

module.exports = router;