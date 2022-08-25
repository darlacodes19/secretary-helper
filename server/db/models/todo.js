const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const TodoListSchema = new Schema ( 
    {
    task: {
        type: String,
        requried: true,
    },
    due: {
        type: Date, 
        required: true,
    },
    priority: {
        type: String,
        required:true,
    },
    done: {
        type: Boolean,
        default: false,
    }
}, 
{timestamps: true},
)

//export the module I just created

module.exports = mongoose.model('TodoLists', TodoListSchema)