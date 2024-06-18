const express = require('express');
const router = express.Router();
const Transport = require('../models/transport');

// Get all transport designs
router.get('/', async (req, res) => {
    try {
        const designs = await Transport.find();
        res.json(designs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new transport design
router.post('/', async (req, res) => {
    const design = new Transport({
        title: req.body.title,
        details: req.body.details,
        imageUrl: req.body.imageUrl
    });

    try {
        const newDesign = await design.save();
        res.status(201).json(newDesign);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
