const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./db/connect');
const cors = require("cors");
const bodyParser = require('body-parser')



//DB config
dbConnection()

//APP config 
const app = express();
const PORT = process.env.PORT || 3001 //process.env.port is used for deploying in Heroku







//Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())





//API Endpoints

app.get('/', (req, res) => {
    res.status(200).send('Hello my people')
})

//Listner 
app.listen(PORT, () => console.log(` I'm listening on port: ${PORT}`))
