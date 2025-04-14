// program: 어떠한 입력 값 넣으면 어떠한 출력 값이 나옴 == 함수

const fs = require("fs");
// fs.mkdirSync("나도 까먹음ㅋ");

// 유저한테 폴더 이름과 갯수를 입력받고, 그 갯수만큼 폴더 만들어주는 프로그램 만들기!
const folder = "이름를 입력해주세요!";
const count = "갯수를 입력해주세요";

const readline = require("readline");

const x1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

x1.question(folder, (folderName) => {
  x1.question(count, (cnt) => {
    for (let i = 1; i <= cnt; i++) {
      const name = `${folderName}${i}`;
      fs.mkdirSync(name);
    }
  });
});
