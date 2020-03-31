
const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', //resets ids
    ignoreTables: [], //can put migration tables in the array so that it won't empty migration tables
  });
};