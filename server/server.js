const express = require('express');
const mongoose = require('mongoose')
const dbConnection = require('./db/connect')
const cors = require("cors")



dbConnection()

//APP config 
const app = express();
const PORT = process.env.PORT || 3001







//Middlewares

//DB config

//API Endpoints

app.get('/', (req, res) => {
    res.status(200).send('Hello my people')
})

//Listner 
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
