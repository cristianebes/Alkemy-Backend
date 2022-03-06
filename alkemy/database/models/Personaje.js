const sequelize = require('sequelize');
const {DataTypes} = sequelize;

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
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	edad: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	peso: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	historia: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id_pelicula: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
};

const config = {
	tableName: "personajes",
	timestamps: false
};

const Personaje = sequelize.define("Personaje", cols, config);

module.exports = Personaje;