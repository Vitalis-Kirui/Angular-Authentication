const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// connecting to database
const connectionString = 'The string will come here.';

mongoose.connect(connectionString)
    .then((results) =>{
        console.log('Successfull connection to database')
    })
    .catch((error) =>{
        console.log(error);
    });


// Api routes home page
router.get('/', (req, res) => {
    res.send('This is from API routes')
});

// Registration api
router.post('/register');

// Login api
router.post('/login');

// regular events endpoint
router.get('/events/regular');

// Special events endpoint
router.get('/events/special');

module.exports = router;