const express = require ('express');
const knex = require ('knex')(require('../knexfile.js')["development"]);

const app = express ();
const port = 8080;

app.get('/', (req,res) =>{
    res.send('Application up and running.')
})

app.get('/pets', (req,res) =>{
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.json(petNames);
        })
})

app.listen(port, () => {
    console.log('Knex and express application running successfully!')
});

