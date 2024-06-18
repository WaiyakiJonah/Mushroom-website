const express = require('express');
const router = express.Router();
const HowTo = require('../models/howTo');

// Get all how-to guides
router.get('/', async (req, res) => {
    try {
        const guides = await HowTo.find();
        res.json(guides);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new how-to guide
router.post('/', async (req, res) => {
    const guide = new HowTo({
        title: req.body.title,
        steps: req.body.steps,
        imageUrl: req.body.imageUrl
    });

    try {
        const newGuide = await guide.save();
        res.status(201).json(newGuide);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
