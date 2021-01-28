var express = require('express');
var router = express.Router();

/* GET users listing. */
const productsController = require('../controllers/productsController');

router.get('/detail/:id/:category', productsController.detalles );

module.exports = router;
