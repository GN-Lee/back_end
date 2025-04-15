// CRUD 기준
// 1. 모든 자동차 조회하는 서버 만들기

const express = require("express");
const app = express();
const { carsRouter } = require("./routes/carsRouter.js");
app.use(express.urlencoded({ extended: true })); // x-form-encoded해줌
app.use(express.json());
app.use("/cars", carsRouter);

app.listen(3000, () => {
  console.log("주차 두개재~");
});
