const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema ({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  churchName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: "Employee",
    required: false,
  },
  
}, {timestamps: true}
);
module.exports = mongoose.model("users", User);