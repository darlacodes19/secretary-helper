const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const MemberSchema = new Schema ( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'users'

    },
    firstName: {
        type: String,
        requried: true,
    },
    lastName: {
        type: String, 
        required: [true, 'Please add a name']
    },
    address: {
        type: String,
        required:true,
    },
    phoneNumber: {
        type: String,
        required:true,
    },
    birthDay: {
        type: String,
        required: true,
    }
}, {timestamps: true},
)

module.exports = mongoose.model('Members', MemberSchema)