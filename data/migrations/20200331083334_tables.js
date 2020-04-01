exports.up = function(knex) {
    return knex.schema
    .createTable("users", users => {
      users.increments();
      users.string("username", 128).notNullable().unique();
      users.string("password", 128).notNullable();
      users.string("role", 128).defaultTo("client");
    })
    .createTable('categories', (tbl) => {
        tbl.increments();
        tbl.string('name', 50).notNullable().unique();
        tbl.string('description', 255);
    })
    .createTable('flashcards', (tbl) => {
        tbl.increments();
        tbl.string('frontCard', 255).notNullable();
        tbl.string('backCard', 255).notNullable();
        tbl
            .integer('category_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('categories')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('user-categories', (tbl) => {
      tbl.increments();
      tbl
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      tbl
          .integer('category_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('categories')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      tbl.boolean('categoryTesting').notNullable().defaultTo(false);
  })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("user-categories")
    .dropTableIfExists("flashcards")
    .dropTableIfExists("categories")
    .dropTableIfExists("users");
  };