const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Specialty = sequelize.define("Specialty", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Specialty;