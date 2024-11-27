const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env);

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Test" });
});

app.all("*", function (req, res) {
  res.status(404).send("Page introuvable 😞");
});

app.listen(process.env.PORT, () => {
  console.log("Serveur en marche 🔥🔥🔥");
});
