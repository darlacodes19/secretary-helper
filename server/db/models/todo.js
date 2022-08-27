const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const TodoListSchema = new Schema ( 
    {
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref: 'users'

    // },
    task: {
        type: String,
        requried: true,
    },
    due: {
        type: String, 
        required: false,
    },
    priority: {
        type: String,
        required:false,
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