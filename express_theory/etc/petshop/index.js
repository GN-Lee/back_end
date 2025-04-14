const express = require("express");
const app = express();
const dogRouter = require("./routes/dogRoutes.js");
const catRouter = require("./routes/catRoutes.js");

app.use(express.text());
app.use(express.json()); // json으로 받겠다는 뜻
app.use("/dogs", dogRouter);
app.use("/cats", catRouter);

app.get("/mega:name", (req, res) => {
  const { name } = req.params;
  res.render();
});

app.listen(3000, () => {
  console.log("자~두개재~~");
});
