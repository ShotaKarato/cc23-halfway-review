exports.up = function (knex) {
  return knex.schema.createTable("notes", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("content").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
