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

module.exports = router;