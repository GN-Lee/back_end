const express = require("express");
const carsRouter = express.Router();
const { carService } = require("../services/carService.js");
const { validateCarData } = require("../middleware/validator.js");
const { existor } = require("../middleware/existor.js");

carsRouter.get("/", (req, res) => {
  res.json(carService.getAll());
});

carsRouter.get("/:id", existor, (req, res) => {
  const car = carService.getById(req.params.id);
  res.status(200).json({ success: true, message: "차 조회 성공", data: car });
});

carsRouter.post("/", validateCarData, (req, res) => {
  carService.create(req.body);
  res.status(201).json({ success: true, message: "차 생성 성공" });
});

carsRouter.put("/", (req, res) => {
  const result = carService.update(req.body);
  if (!result) {
    res.status(404).json({ message: "차량이 없습니다." });
  }
  res.status(200).json({ success: true, message: "차 업데이트 성공" });
});

carsRouter.delete("/", (req, res) => {
  const deleteCar = carService.delete(req.body.id);
  if (!deleteCar) {
    res.status(404).json({ message: "차량이 없습니다." });
  }
  res.status(200).json({ success: true, message: "차 삭제 성공" });
});

module.exports = { carsRouter };
