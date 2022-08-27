const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport')
const {protect} = require('../middleware/authMiddleware')

// http://localhost:3001/routes/users/register

//Load input validation 

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model

const User = require('../db/models/User');
const register = require('../validation/register');
const { secretOrKey } = require('../config/keys');

// Create Register endpoint 

router.post('/register', (req, res) => {
    //Form validation

    const {errors, isValid} = validateRegisterInput(req.body);


    // Check validation

    if(!isValid) {
        return res.status(400).json(errors)
    }


//find user by eamil
// check to see if user already exists 
    User.findOne( {email: req.body.email}).then(user => {

        // if user exists return a string that says email already exists 
        if(user) {
            return res.status(400).json({email: "Email already exists"});
        }else {
            const newUser = new User ({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                churchName: req.body.churchName
            });

    //Hash password before saving in database

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json({user , token: generateToken(user._id) }))
                    .catch(err => console.log(err));
                });
            });
        };
    });
});

//@desc Login
router.post('/login', (req,res) => {
    //form validation 

    const {errors, isValid} = validateLoginInput(req.body);

    //Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find user by email

    User.findOne({email}).then(user => {
        // Check if user exists 

        if(!user) {
            return res.status(404).json({emailnotfound: "Email not found"
        });
        }

    //Check password 
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                //User Matched
                //Create JWT Payload

                const payload = {
                    id: user.id,
                    name: user.name
                };

            //Sign token - generate Token for login 

            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json( {
                        success: true,
                        token: 'Bearer' + ' ' + token
                    });
                }
            );
            } else {
                return res
                .status(400)
                .json({passwordincorrect: "Password is incorrect"});
            }
        });
    });


});

//@desc Get user data 
//@route Get /routes/users/me
//@access Private


router.get('/me', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user);
    }
);
//Generate a JWT for registration 

const generateToken = (id) => {
    return jwt.sign ({id} , secretOrKey , {
        expiresIn: 31556926 // 1 year in seconds
    })
}
module.exports = router;