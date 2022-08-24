const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./db/connect');
const cors = require("cors");
const bodyParser = require('body-parser')
const passport = require('passport');
const users = require('./routes/users')



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
app.use('/routes/users' , users)


//API Endpoints

app.get('/', (req, res) => {
    res.status(200).send('Hello my people')
})

//Listner 
app.listen(PORT, () => console.log(` I'm listening on port: ${PORT}`))
