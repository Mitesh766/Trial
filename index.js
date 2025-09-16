const express = require("express");
require("dotenv/config")
const app = express();

app.get("/", (req,res) => {
  res.send("Hi ther")
});

const PORT = process.env.PORT
app.listen(PORT || 3000, () => {
  console.log("Server started on port 3000");
});
