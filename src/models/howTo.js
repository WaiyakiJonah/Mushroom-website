const mongoose = require('mongoose');

const HowToSchema = new mongoose.Schema({
    title: { type: String, required: true },
    steps: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('HowTo', HowToSchema);
