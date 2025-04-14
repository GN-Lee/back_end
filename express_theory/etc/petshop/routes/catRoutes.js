const express = require("express");
const { cats } = require("../data/cat.js");
const catRouter = express.Router();

// 고양이 불러오기
catRouter.get("/", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;
  const filteredCats = cats.filter(
    (v) =>
      (v.age >= +minAge && v.age <= +maxAge && gender === !gender) || v.gender
  );
  res.json(filteredCats);
});

// 상세 고양이 가져오기
catRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const findCat = dogs[+id];
  res.json(findCat);
});

// 포스트로 고양이 추가하기
catRouter.post("/", (req, res) => {
  const { name, age, species, gender } = req.body;
  const newCat = { name, age, species, gender };
  cats.push(newCat);
  res.json(newCat);
});

module.exports = catRouter;
