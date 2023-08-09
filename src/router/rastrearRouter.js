const express = require('express');
const router = express.Router();
const rastrearController = require('../controller/rastrearController');

router.get('/', rastrearController.principal);
router.get('/rastrear', rastrearController.rastrearPedidos);

module.exports = router;