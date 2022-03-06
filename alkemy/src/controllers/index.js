const db = require('../../database/models')

const showMovies = function(req, res) {
	db.Peliculas.findAll()
		.then(pelicula => res.render("index", { pelicula: pelicula }));
}

module.exports = { showMovies } 



