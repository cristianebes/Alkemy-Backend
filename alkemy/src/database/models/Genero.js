module.exports = (sequelize, dataTypes) => {

	const cols = {
		id: { 
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		nombre: {
			type: dataTypes.STRING,
			allowNull: false
		},
		imagen: {
			type: dataTypes.STRING,
			allowNull: false
		},
		id_pelicula: {
			type: dataTypes.INTEGER,
			allowNull: false
		}
	};

	const config = {
		tableName: "generos",
		timestamps: false
	};

	const Genero = sequelize.define("Genero", cols, config);

	return Genero;

}