const mongoose = require('mongoose')
const Schema = mongoose.Schema


const EventSchema = new Schema ( {
    title: {
        type:String,
        required:true,
    },

    date: {
        type: String, 
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

    details: {
        type: String,
        required: true,
    },
}, {timestamps: true},
)

module.exports = mongoose.model('events', EventSchema)