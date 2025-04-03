const readline = require("readline");

const x = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) =>
  new Promise((success) => x.question(query, success));

let isLoading = true;

const main = async () => {
  console.log("두유 월드 카페에 오신걸 환영합니다.");
  while (isLoading) {
    console.log("1. 주문하기");
    console.log("2. 포장하기");
    console.log("3. 종료하기");

    const answer = await askQuestion("번호 입력:");
    if (+answer == 1) console.log("주문시작!");
    else if (+answer == 2) console.log("포장시작!");
    else if (+answer == 3) {
      console.log("ㅅㄱ");
      isLoading = false; // break;
    } else console.log("다시 골라");
  }
  x.close();
};

main();
