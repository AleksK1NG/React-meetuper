const express = require('express');
const ApiCtrl = require('../controllers/api');
const router = express.Router();

router.get('', ApiCtrl.getMeta);

module.exports = router;
