const knex = require('./connection');

function getUserID(id) {
  return knex('users')
  .where('id', id);
}
