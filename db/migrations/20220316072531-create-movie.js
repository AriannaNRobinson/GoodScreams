"use strict";

// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      rating: {
        allowNull: false,
        type: Sequelize.NUMERIC(4, 2),
      },
      releaseDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      posterImg: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      budget: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      revenue: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      subGenreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "SubGenres" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, options);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Movies", options);
  },
};
