const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProjectBoard = new Schema (
    {
        name: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        key: {
            type: String,
            required: true,
            unique:true,
        },

        description: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('projects' , ProjectBoard)


