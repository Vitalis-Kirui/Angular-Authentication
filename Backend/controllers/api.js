const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Event = require('../models/events');

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

// regular events function
const events =(req, res) => {
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

module.exports = {
    registerUser,
    loginUser,
    events,
}