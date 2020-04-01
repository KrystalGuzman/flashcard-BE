exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { name: "Alphabet", description: "The letters A-Z uppercase and lowercase" },
        { name: "Numbers", description: "Numbers 1-10 with pictures" },
        { name: "Colors", description: "The colors of the rainbow" },
      ]);
    });
};