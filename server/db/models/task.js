const mongoose = require('mongoose')
const {Schema } = mongoose;

const TaskCard = new mongoose.Schema ( {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    {timestamps: ture}
})

module.exports = mongoose.model('card', TaskCard)