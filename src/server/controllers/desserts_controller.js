const express = require('express')
const dessert = express.Router()
const Dessert = require('../models/dessert.js')

// show:
dessert.get('/:dessert', (req, res) => {
    Dessert.findById(req.params.dessert)
        .populate({
            path: 'desserts', 
            options: {limit: 2}
        })
        .then(foundDessert => {
            res.render('dessertShow', {
                dessert: foundDessert
            });
        })
});

// delete
dessert.delete('/:dessert', (req, res) =>{
    Dessert.findByIdAndDelete(req.params.dessert)
        .then(deletedDessert => {
            res.status(303).redirect('/dessert')
        })
})

// export
module.exports = dessert
