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

    if (!username) {
      res.status(400).send("Veuillez saisir un username 😥");
    } else {
      const usernameExist = await User.findOne({
        "account.username": username,
      });
      if (usernameExist === null) {
        const emailExist = await User.findOne({ email: email });
        if (emailExist === null) {
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
        } else {
          res.status(409).json({ error: "email déjà utilisé" });
        }
      } else {
        res
          .status(409)
          .send("Cet username est déjà utilisé, veuillez en choisir un autre");
      }
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
