const mongoose = require("mongoose");

const Institution = new mongoose.Schema({
  institution: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    unique: true,
  },
  desc: {
    type: String,
    min: 3,
    max: 50,
  },
  levels: {
    type: Array,
    // required: true,
    default: [],
  },
  college: {
    type: Array,
    // required: true,

    default: [],
  },
  courses: {
    type: Array,
    // required: true,

    default: [],
  },
});

const Institutions = mongoose.model("Institution", Institution);
module.exports = Institutions;
