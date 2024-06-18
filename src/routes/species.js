const express = require('express');
const router = express.Router();
const Species = require('../models/species');

// Get all species
router.get('/', async (req, res) => {
    try {
        const species = await Species.find();
        res.json(species);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new species
router.post('/', async (req, res) => {
    const species = new Species({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });

    try {
        const newSpecies = await species.save();
        res.status(201).json(newSpecies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
