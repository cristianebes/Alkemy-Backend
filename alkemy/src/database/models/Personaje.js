module.exports = (sequelize, dataTypes) => {

	const cols = {
		id: {
			type: dataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		imagen: {
			type: dataTypes.STRING,
			allowNull: false
		},
		nombre: {
			type: dataTypes.STRING,
			allowNull: false
		},
		edad: {
			type: dataTypes.INTEGER,
			allowNull: true
		},
		peso: {
			type: dataTypes.INTEGER,
			allowNull: true
		},
		historia: {
			type: dataTypes.STRING,
			allowNull: false
		},
		id_pelicula: {
			type: dataTypes.INTEGER,
			allowNull: false,
		}
	};

	const config = {
		tableName: "personajes",
		timestamps: false
	};

	const Personaje = sequelize.define("Personaje", cols, config);

	return Personaje;

}