const User = require('../models/user');

// user registration
const registerUser = (req, res) => {
    let userData = req.body;
    let user  = new User(userData);

    user.save((error, registeredUser) => {
        if(error){
            console.log(error);
        }else{
            res.send(registeredUser);
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
};

// regular events function
const regularEvents =(req, res) => {

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

}

module.exports = {
    registerUser,
    loginUser,
    regularEvents,
}