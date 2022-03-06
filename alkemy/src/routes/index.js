var express = require('express');
var router = express.Router();
const controller = require('../controllers');

/* GET home page. */
router.get('/', controller.showMovies);

module.exports = router;
