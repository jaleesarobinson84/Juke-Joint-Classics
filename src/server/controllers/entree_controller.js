const express = require('express')
const entree = express.Router()
const Entree = require('../models/entree.js')

// show:
entree.get('/:entreeId', (req, res) => {
    Entree.findById(req.params.entreeId)
        .populate({
            path: 'entrees', 
            options: {limit: 2}
        })
        .then(foundEntree => {
            if (!foundEntree) {
                return res.status(404).send("Entree not found")
            }
            res.render('entreeShow', { entree: foundEntree })
        })
})

// delete
entree.delete('/:entreeId', (req, res) =>{
    Entree.findByIdAndDelete(req.params.entreeId)
        .then(deletedEntree => {
            if (!deletedEntree) {
                return res.status(404).send("Entree not found")
            }
            res.status(303).redirect('/entree')
        })
})

module.exports = entree
