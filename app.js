const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cryptoRoutes = require('./routes/crypto');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', cryptoRoutes);
app.use(express.static('public'));


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
