const db = require('../database/models');
const sequelize = db.sequelize;
const fs = require('fs');

const showMovies = function(req, res) {
	db.Pelicula
		.findAll()
		.then(peliculas => res.render('index', { peliculas: peliculas }))
};

module.exports = { showMovies };



