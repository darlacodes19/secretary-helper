const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./db/connect');
const cors = require("cors");
const bodyParser = require('body-parser')
const passport = require('passport');
const users = require('./routes/users')
const all = require('./routes/allRoutes')



//DB config
dbConnection()

//APP config 
const app = express();


const PORT = process.env.PORT || 3001 //process.env.port is used for deploying in Heroku

// Body Parser Middlewares


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())


//Passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);

//Routes 

// http://localhost:3001/routes/users
app.use('/routes/users' , users)

// http://localhost:3001/routes/

app.use(`/routes` , all)


//API Endpoints

app.get('/', (req, res) => {
    res.status(200).send('Hello my people')
})

//Listner 
app.listen(PORT, () => console.log(` I'm listening on port: ${PORT}`))
