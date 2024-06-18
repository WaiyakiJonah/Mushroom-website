const mongoose = require('mongoose');

const TransportSchema = new mongoose.Schema({
    title: { type: String, required: true },
    details: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Transport', TransportSchema);
