
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Krystal", password: "password", role: "admin" },
        { username: "hello", password: "there" },
      ]);
    });
};