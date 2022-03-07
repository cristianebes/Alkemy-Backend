const db = require('../database/models');
const sequelize = db.sequelize;
const fs = require('fs');

const showMoviesDetails = function(req, res) {
	db.Pelicula
		.findByPk(req.params.id)
		.then(pelicula => res.render('products', { pelicula: pelicula }))
};

module.exports = { showMoviesDetails };