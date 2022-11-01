const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

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
router.post('/register', (req, res) => {
    let userData = req.body;
    let user  = new User(userData);

    user.save((error, registeredUser) => {
        if(error){
            console.log(error);
        }else{
            res.send(registeredUser);
        }
    });

});

// Login api
router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email : userData.email}, (error, user) => {
        if(error){
            console.log(error);
        }
        else{
            if(!user){
                res.send('User not found');
            }
            else{
                if(user.password !== userData.password){
                    res.send('Invalid password');
                }
                else{
                    res.send(user);
                }
            }
        }

    })
});

// regular events endpoint
router.get('/events/regular', (req, res) => {

    let events = [
        {
            "_id": "1",
            "name": "Angular",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "2",
            "name": "Mongodb",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "3",
            "name": "Express",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "4",
            "name": "Mongoose",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "5",
            "name": "CORS",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "6",
            "name": "Bootstrap",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        }
    ];

    res.json(events)

});

// Special events endpoint
router.get('/events/special', (req, res) => {

    let events = [
        {
            "_id": "1",
            "name": "Angular",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "2",
            "name": "Mongodb",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "3",
            "name": "Express",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "4",
            "name": "Mongoose",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "5",
            "name": "CORS",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        },
        {
            "_id": "6",
            "name": "Bootstrap",
            "description": "Lorem Ipsum",
            "date": "2022-11-1T15:55:43.511Z"
        }
    ];

    res.json(events)

});

module.exports = router;