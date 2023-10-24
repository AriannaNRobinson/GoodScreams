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

data.forEach((ele, index) => {
  ele.media.forEach((media) => {
    let link;
    if (media.site === "YouTube") {
      link = `https://www.youtube-nocookie.com/embed/${media.key}`;
    } else {
      link = `https://vimeo.com/${media.key}`;
    }

    results.push({
      name: media.name,
      key: link,
      siteId: tableData.sites.indexOf(media.site) + 1,
      typeId: tableData.types.indexOf(media.type) + 1,
      movieId: index + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
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
    options.tableName = 'Media';
    // end

    // the below used to say "Media" instead of options
    return queryInterface.bulkInsert(options, results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Media';
    // end

    // the below used to say "Media" instead of options
    return queryInterface.bulkDelete(options, null, {});
  },
};
