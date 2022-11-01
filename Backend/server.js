const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Importing api routes
const api = require('./routes/api');

app.use(bodyParser.json());

// Listening to requests on port 3000
app.listen(3000);

// Home get request
app.get('/', (req, res) => {
    res.send('Server is listening on port 3000')
});

// Using api routes
app.use('/api', api)