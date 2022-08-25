const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const TaskCard = new Schema ( {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    
}, {timestamps: true}
)

module.exports = mongoose.model('card', TaskCard)