const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mushroomFarm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const speciesRoutes = require('./routes/species');
const pestsRoutes = require('./routes/pests');
const howToRoutes = require('./routes/howTo');
const transportRoutes = require('./routes/transport');
const growingRoutes = require('./routes/growing');

app.use('/api/species', speciesRoutes);
app.use('/api/pests', pestsRoutes);
app.use('/api/howto', howToRoutes);
app.use('/api/transport', transportRoutes);
app.use('/api/growing', growingRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
