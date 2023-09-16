const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      // unique: true,
    },
    name: {
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
    tutorials: {
      type: Array,
      default: [],
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
    courses: {
      type: Array,
      default: [],
    },
  }
  // { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
