const mongoose = require('mongoose')
const {Schema } = mongoose;

const MemberSchema = new mongoose.Schema ( {
    firstName: {
        type: String,
        requried: true,
    },
    lastName: {
        type: String, 
        required: true,
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

module.exports('Members', MemberSchema)