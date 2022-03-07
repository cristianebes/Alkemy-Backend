module.exports = (sequelize, DataTypes) => {

	const cols = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		imagen: {
			type: DataTypes.STRING,
			allowNull: false
		},
		titulo: {
			type: DataTypes.STRING,
			allowNull: false
		},
		fecha_de_creacion: {
			type: DataTypes.DATE,
			allowNull: true
		},
		calificacion: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		id_personaje: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	};

	const config = {
		tableName: "peliculas",
		timestamps: false
	};

	const Pelicula = sequelize.define("Pelicula", cols, config);

	return Pelicula;

}