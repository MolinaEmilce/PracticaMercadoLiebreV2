var express = require('express');
var router = express.Router();

//controllers
const indexControll = require('../controllers/indexController');
/* GET home page. */
router.get('/', indexControll.index);

module.exports = router;
