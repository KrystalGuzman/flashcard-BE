const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
	remove
}

function find(){
 return db('flashcards');
}

function findBy(filter) {
    return db("flashcards").where(filter);
  }

function findById(id){
    return db('flashcards')
    .where({ id })
    .first();
}

function add(flashcard){
    return db("flashcards")
    .insert(flashcard, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(changes, id){
    return db('flashcards')
    .where({ id })
    .update(changes)
    .then(() =>{
        return findById(id)
    });
}

function remove(id){
    return db("flashcards")
    .where("id", id)
    .del();
}