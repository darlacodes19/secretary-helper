const mongoose = require('mongoose')
const {Schema } = mongoose;

const TodoListSchema = new mongoose. 
Schema ( {
    task: {
        type: String,
        requried: true,
    },
    due: {
        type: String, 
        required: true,
    },
    Priority: {
        type: String,
        required:true,
    }
})