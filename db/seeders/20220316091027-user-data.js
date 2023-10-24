"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

const users = require("../../json/sampleUsers.json");
const results = [];
users.forEach((ele) => {
  results.push({
    firstName: ele.firstName,
    lastName: ele.lastName,
    email: ele.email,
    hashedPassword: ele.hashedPassword,
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
    options.tableName = 'Users';
    // end

    // the below used to say "Users" instead of options
    return queryInterface.bulkInsert(options, results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Users';
    // end

    // the below used to say "Users" instead of options
    return queryInterface.bulkDelete(options, null, {});
  },
};
