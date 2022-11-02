const jwt = require('jsonwebtoken');
const User = require('../models/user');

// user registration
const registerUser = (req, res) => {
    let userData = req.body;
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
                    res.send(user);
                }
            }
        }

    })
};

// regular events function
const regularEvents =(req, res) => {

    let events = [
        {
            "_id": "1",
            "name": "Angular",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "2",
            "name": "Mongodb",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "3",
            "name": "Express",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "4",
            "name": "Mongoose",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "5",
            "name": "CORS",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "6",
            "name": "Bootstrap",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        }
    ];

    res.json(events)

};

// Special events function
const specialEvents = (req, res) => {

    let events = [
        {
            "_id": "1",
            "name": "Angular",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "2",
            "name": "Mongodb",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "3",
            "name": "Express",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "4",
            "name": "Mongoose",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "5",
            "name": "CORS",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        },
        {
            "_id": "6",
            "name": "Bootstrap",
            "description": "Lorem Ipsum",
            "date": "1/11/22"
        }
    ];

    res.json(events)

};

module.exports = {
    registerUser,
    loginUser,
    regularEvents,
    specialEvents
}