const express = require('express');
const router = express.Router();
const Growing = require('../models/growing');

// Get all growing details
router.get('/', async (req, res) => {
    try {
        const details = await Growing.find();
        res.json(details);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new growing detail
router.post('/', async (req, res) => {
    const detail = new Growing({
        title: req.body.title,
        details: req.body.details,
        imageUrl: req.body.imageUrl
    });

    try {
        const newDetail = await detail.save();
        res.status(201).json(newDetail);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
