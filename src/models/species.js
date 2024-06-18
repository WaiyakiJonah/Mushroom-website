const mongoose = require('mongoose');

const SpeciesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Species', SpeciesSchema);
