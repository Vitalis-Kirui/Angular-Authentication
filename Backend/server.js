const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Listening to requests on port 3000
app.listen(3000);

// Home get request
app.get('/', (req, res) => {
    res.send('Server is listening on port 3000')
});