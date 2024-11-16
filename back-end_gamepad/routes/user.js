const express = require("express");
const router = express.Router();
const uid2 = require("uid2");
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

const User = require("../models/User");

router.post("/user/signup", async (req, res) => {
  try {
    // console.log(req.body);
    const { email, username, password } = req.body;
    const token = uid2(64);
    const salt = uid2(16);
    const hash = SHA256(password + salt).toString(encBase64);
    // console.log(hash);

    const newUser = new User({
      email: email,
      account: { username: username },
      token: token,
      salt: salt,
      hash: hash,
    });
    await newUser.save();
    res.json({
      _id: newUser._id,
      account: newUser.account,
      token: newUser.token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
