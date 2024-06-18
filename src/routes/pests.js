const express = require('express');
const router = express.Router();
const Pests = require('../models/pests');

// Get all pests
router.get('/', async (req, res) => {
    try {
        const pests = await Pests.find();
        res.json(pests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new pest
router.post('/', async (req, res) => {
    const pest = new Pests({
        name: req.body.name,
        description: req.body.description,
        remedies: req.body.remedies,
        imageUrl: req.body.imageUrl
    });

    try {
        const newPest = await pest.save();
        res.status(201).json(newPest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
