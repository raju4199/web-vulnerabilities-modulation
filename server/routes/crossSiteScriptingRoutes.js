const express = require('express');
const router = express.Router();
const crossSiteScriptingController = require('../controllers/crossSiteScriptingController');

router.post('/message', crossSiteScriptingController.message);

module.exports = router;