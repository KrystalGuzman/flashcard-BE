exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("flashcards")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("flashcards").insert([
        { frontCard: "A", backCard: "a", category_id: 1 },
        { frontCard: "B", backCard: "b", category_id: 1 },
        { frontCard: "C", backCard: "c", category_id: 1 },
        { frontCard: "D", backCard: "d", category_id: 1 },
        { frontCard: "E", backCard: "e", category_id: 1 },
        { frontCard: "F", backCard: "f", category_id: 1 },
        { frontCard: "G", backCard: "g", category_id: 1 },
        { frontCard: "H", backCard: "h", category_id: 1 },
        { frontCard: "I", backCard: "i", category_id: 1 },
        { frontCard: "J", backCard: "j", category_id: 1 },
        { frontCard: "K", backCard: "k", category_id: 1 },
        { frontCard: "L", backCard: "l", category_id: 1 },
        { frontCard: "M", backCard: "m", category_id: 1 },
        { frontCard: "N", backCard: "n", category_id: 1 },
        { frontCard: "O", backCard: "o", category_id: 1 },
        { frontCard: "P", backCard: "p", category_id: 1 },
        { frontCard: "Q", backCard: "q", category_id: 1 },
        { frontCard: "R", backCard: "r", category_id: 1 },
        { frontCard: "S", backCard: "s", category_id: 1 },
        { frontCard: "T", backCard: "t", category_id: 1 },
        { frontCard: "U", backCard: "u", category_id: 1 },
        { frontCard: "V", backCard: "v", category_id: 1 },
        { frontCard: "W", backCard: "w", category_id: 1 },
        { frontCard: "X", backCard: "x", category_id: 1 },
        { frontCard: "Y", backCard: "y", category_id: 1 },
        { frontCard: "Z", backCard: "z", category_id: 1 },
        { frontCard: "1", backCard: "•", category_id: 2 },
        { frontCard: "2", backCard: "• •", category_id: 2 },
        { frontCard: "3", backCard: "• • •", category_id: 2 },
        { frontCard: "4", backCard: "• • • •", category_id: 2 },
        { frontCard: "5", backCard: "• • • • •", category_id: 2 },
        { frontCard: "6", backCard: "• • • • • •", category_id: 2 },
        { frontCard: "7", backCard: "• • • • • • •", category_id: 2 },
        { frontCard: "8", backCard: "• • • • • • • •", category_id: 2 },
        { frontCard: "9", backCard: "• • • • • • • • •", category_id: 2 },
        { frontCard: "10", backCard: "• • • • • • • • • •", category_id: 2 },
        { frontCard: "red", backCard: "#FF0000", category_id: 3 },
        { frontCard: "orange", backCard: "#FFA500", category_id: 3 },
        { frontCard: "yelow", backCard: "#FFFF00", category_id: 3 },
        { frontCard: "green", backCard: "#008000", category_id: 3 },
        { frontCard: "blue", backCard: "#0000FF", category_id: 3 },
        { frontCard: "indigo", backCard: "#4B0082", category_id: 3 },
        { frontCard: "violet", backCard: "#800080", category_id: 3 },
        
        
      ]);
    });
};