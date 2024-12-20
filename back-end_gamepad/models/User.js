const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: {
    unique: true,
    type: String,
  },
  account: {
    username: {
      required: true,
      unique: true,
      type: String,
    },
    avatar: Object,
  },
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;
