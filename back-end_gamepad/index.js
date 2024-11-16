const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const port = 3000;

mongoose.connect("mongodb://localhost/game_pad");

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Test" });
});

app.all("*", function (req, res) {
  res.status(404).send("Page introuvable 😞");
});

app.listen(port, () => {
  console.log("Serveur en marche 🔥🔥🔥");
});
