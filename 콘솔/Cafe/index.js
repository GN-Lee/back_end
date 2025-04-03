const { cafeMenu } = require("./func/init.js");
const { menuOption } = require("./option/base.js");
const { InvalidOption } = require("./option/invalid.js");
const { managers } = require("./manager/base.js");

const main = async () => {
  const data = cafeMenu();
  console.log("두유라떼월드 카페");
  while (true) {
    console.log("1. 판매하기");
    console.log("2. 재고 채우기");
    console.log("3. 금일 정산");
    console.log("4. 시스템 종료");

    const answer = await managers.prompt.askQuestion("번호를 입력하시오");
    const option = menuOption[answer] || new InvalidOption();
    await option.excute(data);
  }
};
main();
