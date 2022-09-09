/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('TRUNCATE pet_type CASCADE')
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Purina One', description: 'Dog Kibble'},
    {id: 2, name: 'Wild Bird Seed', description: 'Seed for wild birds'},
    {id: 3, name: 'Meow Mix', description: 'Cat Kibble'},
    {id: 4, name: 'Betta Flakes', description: 'Fish flakes for Betta Fish'}
  ]);
};
