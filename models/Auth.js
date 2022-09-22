const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  userId: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },

  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  type: {
    type: String,
    required: true,
    max: 10,
    min: 2,
  },
  token:{
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Auth", authSchema);
