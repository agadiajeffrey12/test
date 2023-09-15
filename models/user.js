const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 30,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
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
  isStudent: {
    type: String,
    default: "",
  },
  isTeacher: {
    type: String,
    default: "",
  },
  channels: {
    type: Array,
    default: [],
  },
  pro: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    max: 50,
  },
  institution: {
    type: String,
    default: "",
  },
  college: {
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
