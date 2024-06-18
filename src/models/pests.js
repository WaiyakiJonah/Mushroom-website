const mongoose = require('mongoose');

const PestsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    remedies: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Pests', PestsSchema);
