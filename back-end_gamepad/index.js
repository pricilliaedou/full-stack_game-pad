const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Test" });
});

app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});

app.listen(port, () => {
  console.log("Serveur en marche 🔥🔥🔥");
});
