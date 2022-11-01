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

module.exports = {
    registerUser,
    loginUser,
}