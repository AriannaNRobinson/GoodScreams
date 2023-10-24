"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'MoviesLists';
    // end

    // the below used to say "MoviesLists" instead of options
    return queryInterface.bulkInsert(
      options,
      [
        {
          movieId: 1,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 4,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 33,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 21,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 3,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 2,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 139,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 22,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 12,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          movieId: 82,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'MoviesLists';
    // end

    // the below used to say "MoviesLists" instead of options
    return queryInterface.bulkDelete(options, null, {});
  },
};
