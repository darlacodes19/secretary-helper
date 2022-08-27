const jwt = require("jsonwebtoken")
const User = require('../db/models/User')
const asyncHandler = require('express-async-handler')
const secret = require('../config/keys')

// function to authroize users to only access their information
const protect = asyncHandler(async (req, res, next) => {
    let token
//req.header - how to access header authorization 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{

            token = req.headers.authorization.split(' ')(1)

            //verify token

            const decoded = jwt.verify(token, secret  )

            //Get user from token
            req.user = await User.findById(decoded.id).select('-password')

            next()

        }catch(error) {
                console.log(error)
                res.status(401)
                throw new Error('Not authorized')
        }

        if(!token) {
            res.status(401)
            throw new Error('Not authorized, no token')
        }
    }
})

module.exports = { protect}
