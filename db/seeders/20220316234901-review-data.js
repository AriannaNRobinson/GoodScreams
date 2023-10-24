"use strict";

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

const data = require("../../json/fullDetails.json");
const users = require("../../json/sampleUsers.json");
const reviewArr = [
  "This movie caused me to fall asleep.",
  "Best movie ever!",
  "A MUST-SEE for anyone who loves Horror Movies",
  "What an Adventure!!",
  "This movie was alright. The special effects were terrible though!",
  "I only watched this because I was bored. It was more boring than staring at the wall.",
  "This was the best movie I've ever seen! I can't wait for the sequel!",
  "The book was way better than the movie! They left out all the good parts!!!",
  "Whoever directed this needs an award! GREAT movie!",
  "OMG!!! SO SCARY!! I had nightmares last night!",
  "This movie was more like a comedy since it was so bad. Wouldn't say that it was a horror film...",
  "Pffffft... Not even scary. LAME!",
  "Unoriginal.",
  "This is my new favorite movie! So good!",
  "Excellent acting. Give this cast some Oscars!",
];
const results = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let counter = 139;

for (let i = 1; i <= counter; i++) {
  const rand = getRandomInt(2, 6);
  for (let j = 0; j < rand; j++) {
    results.push({
      content: reviewArr[getRandomInt(0, 15)],
      userId: getRandomInt(1, 7),
      movieId: i,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}

// data.forEach((ele, index) => {
//   ele.reviews.forEach((reviews) => {});
// });

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Reviews';
    // end

    // the below used to say "Reviews" instead of options
    return queryInterface.bulkInsert(options, results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // new
    options.tableName = 'Reviews';
    // end

    // the below used to say "Reviews" instead of options
    return queryInterface.bulkDelete(options, null, {});
  },
};
