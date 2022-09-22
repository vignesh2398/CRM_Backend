const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
 
 
  number: {
    type: String,
    max: 255,
  },
  email: {
    type: String,
    max: 255,
  },
  address: {
    type: String,
    max: 255,
  },
  client: {
    type: String,
    max: 255,
  },
  title: {
    type: String,
    max: 255,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Contact", contactSchema);
