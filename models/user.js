const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  country: {
    type: String,
    required: false,
    max: 50,
  },
  state: {
    type: String,
    required: false,
    max: 50,
  },
  school: {
    type: String,
    required: false,
    max: 50,
  },
  college: {
    type: String,
    required: false,
    max: 50,
  },
  department: {
    type: String,
    required: false,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  level: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
