/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Mack', pet_type_id: 3, pet_food_type_id: 1},
    {id: 2, name: 'Moose', pet_type_id: 3, pet_food_type_id: 1},
    {id: 3, name: 'Clover', pet_type_id: 2, pet_food_type_id: 2},
    {id: 4, name: 'Blue', pet_type_id: 4, pet_food_type_id: 4}
  ]);
};
