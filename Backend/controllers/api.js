const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Event = require('../models/events');
const { json } = require('body-parser');

// user registration
const registerUser = (req, res) => {
    let userData = req.body;

    User.findOne({email : userData.email}, (error, user) => {

        if(error){
            console.log(error);
        }
        if(user){
            res.status(201).send("User with same email already registered");
        }
        else{
            let user  = new User(userData);

            user.save((error, registeredUser) => {
                if(error){
                    console.log(error);
                }else{
                    let payload ={subject : registeredUser._id}
                    let token = jwt.sign(payload , 'secretkey')
                    res.send({token});
                }
            });
        }

    })

};

// User login
const loginUser = (req, res) => {
    let userData = req.body;

    User.findOne({email : userData.email}, (error, user) => {
        if(error){
            console.log(error);
        }
        else{
            if(!user){
                res.status(401).send('User not found');
            }
            else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password');
                }
                else{
                    let payload = {subject : user._id}
                    let token = jwt.sign(payload, 'secretkey')
                    res.send({token});
                }
            }
        }

    })
};

//Creating events function
const createEvents =(req, res) => {
    let anEvent = req.body;
    let event = new Event(anEvent);

    event.save(event, (error, event) =>{
        if(error){
            console.log(error);
        }
        else{
            res.send(event);
        }
    })

};

// Special events function
const getEvents= (req, res) => {

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

};

module.exports = {
    registerUser,
    loginUser,
    createEvents,
    getEvents
}