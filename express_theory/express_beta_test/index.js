const express = require("express");
const app = express();
const { students } = require("./students.js");
const { successResponse, failResponse } = require("./utils/response.js");
app.use(express.json());

// 전체 학생 조회
app.get("/students", (req, res) => {
  successResponse(res, 200, "학생 목록 조회 성공", students);
});

// 상세 학생 조회
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const student = students.find((v) => v.id == +id);
  if (!student) {
    failResponse(
      res,
      404,
      "학생 조회 실패",
      "그런 사람 없음",
      "존재하지 않는 학생입니다."
    );
  }
  successResponse(res, 200, "학생 조회 완료", student);
});

// 학생 삭제
app.delete("/students/:id", (req, res) => {
  const { id } = req.body;
  const student = students.find((v) => v.id == +id);
  if (!student) {
    failResponse(
      res,
      404,
      "학생 조회 실패",
      "그런 사람 없음",
      "존재하지 않는 학생입니다."
    );
  } else {
    const filteredStudent = students.filter((v) => v.id != +id);
    successResponse(res, 200, "학생 삭제 완료", filteredStudent);
  }
});

app.listen(3000, () => {
  console.log("학생리스트");
});
