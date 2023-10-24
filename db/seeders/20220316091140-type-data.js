"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

const data = require("../../json/tableAssets.json");
const results = [];
data.types.forEach((ele) => {
  results.push({
    name: ele,
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
    options.tableName = 'Types';
    // end

    // the below used to say "Types" instead of options
    return queryInterface.bulkInsert(options, results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Types';
    // end

    // the below used to say "Types" instead of options
    return queryInterface.bulkDelete(options, null, {});
  },
};
