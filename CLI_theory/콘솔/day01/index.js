// framework

// 콘솔 readline 내장 모듈(라이브러리) 가져오기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("옵치 최애 캐릭터는?", (answer) => {
  console.log("가장 좋아하는 캐릭터는:" + answer);
  rl.close();
});
