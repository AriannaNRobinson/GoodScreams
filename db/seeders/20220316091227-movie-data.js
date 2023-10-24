"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

const data = require("../../json/fullDetails.json");
const tableData = require("../../json/tableAssets.json");
const results = [];

data.forEach((ele) => {
  const split = ele.release_date.split("-");

  results.push({
    name: ele.original_title,
    rating: ele.vote_average / 2,
    releaseDate: new Date(split[0], split[1] - 1, split[2]),
    posterImg: `https://image.tmdb.org/t/p/original${ele.poster_path}`,
    description: ele.overview,
    budget: ele.budget,
    revenue: ele.revenue,
    subGenreId: tableData.subgenres.indexOf(ele.subgenre) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Movies';
    // end

    // the below used to say "Movies" instead of options
    return queryInterface.bulkInsert(options, results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Movies';
    // end

    // the below used to say "Movies" instead of options
    return queryInterface.bulkDelete(options, null, {});
  },
};
