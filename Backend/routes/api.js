const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const apiControllers = require('../controllers/api');

// Api routes home page
router.get('/', (req, res) => {
    res.send('This is from API routes')
});

// Registration api
router.post('/register', apiControllers.registerUser);

// Login api
router.post('/login', apiControllers.loginUser);

// regular events endpoint
router.get('/events/regular', apiControllers.regularEvents);

// Special events endpoint
router.get('/events/special', verifyToken ,apiControllers.specialEvents);

// Verify token middleware
function verifyToken(req, res, next){

    // Checking authorization key in the headers
    if(!req.headers.authorization){
        res.status(401).send('Unauthorized request');
    };

    // If there is an authorization key
    let token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
        res.status(401).send('Unauthorized request');
    }

    // Verify the token if not null
    let payload = jwt.verify(token, 'secretkey')

    // if token is not correct
    if(!payload){
        res.status(401).send('Unauthorized request');
    };

    req.userId = payload.subject

    next();

};

module.exports = router;