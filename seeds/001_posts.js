
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post: 'this is a post'},
        {post: 'this is too'},
        {post: 'also, this is a post'}
      ]);
    });
};
