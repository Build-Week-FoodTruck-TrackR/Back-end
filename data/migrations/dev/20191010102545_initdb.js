exports.up = function(knex) {
  return knex.schema
    .createTable("users", col => {
      col.increments();
      col
        .string("username", 50)
        .unique()
        .notNullable();
      col.string("password", 255).notNullable();
      col
        .string("email", 50)
        .notNullable()
        .unique();
    })
    .createTable("roles", col => {
      col.increments();
    })
    .createTable("diner", col => {
      col.increments();
    })
    .createTable("diner_favs", col => {
      col.increments();
    })
    .createTable("diner_reviews", col => {
      col.increments();
    })
    .createTable("operator", col => {
      col.increments();
    })
    .createTable("menus", col => {
      col.increments();
    })
    .createTable("routes", col => {
      col.increments();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
