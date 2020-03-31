const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
}

function find(){
 return db('flashcards');
}

function findById(id){
    return db('flashcards')
    .where({ id })
    .first();
}

function findSteps(id){
    return db("steps")
    .select("steps.id", "flashcards.flashcard_name", "steps.step_number", "steps.instructions")
    .join("flashcards", "steps.flashcard_id", "flashcards.id")
    .where("flashcard_id", id);
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

function addStep(step, id) {
    return db('steps')
      .insert({ ...step, flashcard_id: id });
  };