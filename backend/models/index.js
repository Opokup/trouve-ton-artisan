const sequelize = require("../config/database");

const Category = require("./Category");
const Specialty = require("./Specialty");
const Artisan = require("./Artisan");

Category.hasMany(Specialty, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
});

Specialty.belongsTo(Category, {
  foreignKey: {
    name: "categoryId",
    allowNull: false,
  },
});

Specialty.hasMany(Artisan, {
  foreignKey: {
    name: "specialtyId",
    allowNull: false,
  },
});

Artisan.belongsTo(Specialty, {
  foreignKey: {
    name: "specialtyId",
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Category,
  Specialty,
  Artisan,
};