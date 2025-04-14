const express = require("express");
const app = express();
app.use(express.text());

app.get("/coffee", (req, res) => {
  res.send("it커피");
});

app.get("/cookie", (req, res) => {
  res.json({
    name: "포로쿠키",
    hp: 3000,
  });
});

app.get("/bread", (req, res) => {
  const { size, count } = req.query;
  res.json({
    count,
    size,
    breadNAme: "피자빵",
  });
});

app.post("/jelly", (req, res) => {
  console.log(req.body);
  res.json({ test: true });
});

app.post("/boardgame", (req, res) => {
  console.log(req.body);
  res.json({ name: `${req.body} 꿀잼` });
});

app.listen(3000, () => {
  console.log("두개재~");
});
