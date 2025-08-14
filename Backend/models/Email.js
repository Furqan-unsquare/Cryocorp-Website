const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    unique:false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Email", emailSchema);