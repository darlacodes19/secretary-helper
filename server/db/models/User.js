const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  churchName: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: "Employee",
  },
  
});
module.exports = mongoose.model("users", User);