const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize();

const cols = {
	id: { 
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	imagen: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id_pelicula: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
};

const config = {
	tableName: "generos",
	timestamps: false
};

const Genero = sequelize.define("Genero", cols, config);

module.exports = Genero;