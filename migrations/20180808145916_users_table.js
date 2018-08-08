
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(user) {
    user.increments()

    user
    .string('name')
    .notNullable()
    .unique()
  })
};

exports.down = function(knex, Promise) {
  
};
