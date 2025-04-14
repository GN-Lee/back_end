const fs = require("fs");
const { threadId } = require("worker_threads");

// 런타임 에러
// 파일연결, 네트워크연결(API), DB연결
// ty - catch를 써서 프로그램 정상 작동화 시킴

// try {
//   const data = fs.readFileSync("coffee123.txt", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
//   console.log("그런 파일 없음");
// } //에러우려의 코드 넣기

try {
  console.log("작업 시작");
  throw new Error("에러 일부러 던짐");
} catch (e) {
  console.log(e, e.message);
}

const divide = (a, b) => {
  if (b == 0) throw new Error("0으로 못 나눠");
  return a / b;
};
try {
  divide(10, 3);
  divide(10, 0);
  throw new Error("에러 일부러 던짐");
} catch (e) {
  console.log(e, e.message);
}
