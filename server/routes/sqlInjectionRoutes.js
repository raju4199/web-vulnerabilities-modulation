const express = require('express');
const router = express.Router();
const sqlInjectionController = require('../controllers/sqlInjectionController');

router.post('/login', sqlInjectionController.login);

module.exports = router;