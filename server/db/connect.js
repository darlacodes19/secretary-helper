//external imports 
const mongoose = require('mongoose');
const dotenv = require('dotenv')

//make sure the DB_STRING is associated with its
//value, which is the mongodb connection string from the cluster (use path)

dotenv.config( {path: 'config.env'})

//1- use mongoose to connect this app to our database on MongoDB using the DB_URL (connection string)
//2-these are options to ensure that the connection is done properly 
//3-use a then.catch block to show if the connection was successful or not 

async function dbConnection() {
mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology: true,}).then( () => {
    console.log('Successfully connected to MongoDB Atlas')
}).catch( (error) => {
    console.log('Unable to connect to MongoDB Atlas');
    console.error(error)
})
}



module.exports = dbConnection
