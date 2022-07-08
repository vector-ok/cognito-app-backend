const express = require('express');

const placeController = require('../controller/place');

const router = express.Router();

router.get('/', placeController.placeGet);

module.exports = router;
