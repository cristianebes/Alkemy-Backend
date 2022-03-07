var express = require('express');
var router = express.Router();
const controller = require('../controllers/products');

/* GET home page. */
router.get('/:id', controller.showMoviesDetails);

module.exports = router;