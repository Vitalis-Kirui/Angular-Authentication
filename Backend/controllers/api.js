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

module.exports = {
    registerUser,
}