const express = require('express');
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
router.get('/events/special', apiControllers.specialEvents);

module.exports = router;