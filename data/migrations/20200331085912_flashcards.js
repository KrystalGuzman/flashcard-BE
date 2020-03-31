exports.up = function(knex) {
    return knex.schema
      .createTable('category', tbl => {
        tbl.increments();
        tbl.text('flashcard_category', 128)
          .unique()
          .notNullable();
      })
      .createTable('flashcard', tbl => {
        tbl.increments();
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
        tbl.text('instructions')
          .notNullable();
        tbl.integer('flashcard_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('flashcards')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('steps')
      .dropTableIfExists('category');
  };