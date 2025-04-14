const express = require("express");
const app = express();

app.get("/coffee", (req, res) => {
  res.sendFile(__dirname + "/views/coffee.html");
});

app.get("/bread", (req, res) => {
  res.status(200).json([
    { name: "피자빵", price: 3000 },
    { name: "소금빵", price: 2500 },
    { name: "멜론빵", price: 3500 },
  ]);
});

app.listen(3000, () => {
  console.log("커피내놔");
});
