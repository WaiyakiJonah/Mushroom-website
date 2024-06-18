const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3001;

// Define routes
const indexRoute = require('./src/routes/index');
app.use('/', indexRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
