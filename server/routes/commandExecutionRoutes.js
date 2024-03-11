const express = require('express');
const router = express.Router();
const commandExecutionController = require('../controllers/commandExecutionController');

router.post('/', commandExecutionController.executeCommand);

module.exports = router;