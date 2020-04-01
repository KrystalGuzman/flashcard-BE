const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
    findFlashcardsByCategoryID
}

function find(){
 return db('categories');
}

function findBy(filter) {
    return db("categories").where(filter);
  }

function findById(id){
    return db('categories')
    .where({ id })
    .first();
}

function add(category){
    return db("categories")
    .insert(category, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(changes, id){
    return db('categories')
    .where({ id })
    .update(changes)
    .then(() =>{
        return findById(id)
    });
}

function remove(id){
    return db("categories")
    .where("id", id)
    .del();
}

// get all flashcards with the same category ID
function findFlashcardsByCategoryID(id){
    return db("flashcards")
    .select("flashcards.id", "categories.name", "flashcards.frontCard", "flashcards.backCard")
    .join("categories", "flashcards.category_id", "categories.id")
    .where("category_id", id);
}