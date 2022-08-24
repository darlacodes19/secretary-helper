const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../db/connect");

//Load input validation 

const validateRegisterInput = require("../validation/register");

const validateRegisterInput = require("../validation/login");

// Load User model

const User = require('../db/models/User');
const register = require('../validation/register');

// Create Register endpoint 

router.post('/register', (req, res) => {
    //Form validation

    const {errors, isValid} = validateRegisterInput(req.body);


    // Check validation

    if(!isValid) {
        return res.status(400).json(errors)
    }
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

    //Has password before saving in database

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) =>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
        };
    });
});