const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connecting to database
const connectionString = 'mongodb+srv://vitalis:vitalis1234@ninjatuts.tzbzx2y.mongodb.net/Angular-Authentication?retryWrites=true&w=majority'

mongoose.connect(connectionString)
    .then((results) =>{
        // Listening to requests on port 3000
        app.listen(3000);
        console.log('Successfull connection to database')
    })
    .catch((error) =>{
        console.log(error);
    });

// Importing api routes
const api = require('./routes/api');

app.use(bodyParser.json());

// Home get request
app.get('/', (req, res) => {
    res.send('Server is listening on port 3000')
});

// Using api routes
app.use('/api', api)