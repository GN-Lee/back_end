const express = require("express");
const { dogs } = require("../data/dog.js");
const dogRouter = express.Router();

// 강아지 불러오기
dogRouter.get("/", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;
  const filteredDogs = dogs.filter(
    (v) =>
      (v.age >= +minAge && v.age <= +maxAge && gender === !gender) || v.gender
  );
  res.json(filteredDogs);
});

// 상세 강아지 가져오기
dogRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const findDog = dogs[+id];
  res.json(findDog);
});

// 포스트로 강아지 추가하기
dogRouter.post("/", (req, res) => {
  const { name, age, species, gender } = req.body;
  const newDog = { name, age, species, gender };
  dogs.push(newDog);
  res.json(newDog);
});

module.exports = dogRouter;
