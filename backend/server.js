const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Tested!"});
});

app.listen(port, () => {
  console.log(`App backend listening on port https://localhost/${port}`);
});
