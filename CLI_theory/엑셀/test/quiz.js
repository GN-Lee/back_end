// 첫번째 시트에는 베라로 설정
// 아이스크림이름, 칼로리, 성분
// 5가지의 맛 넣어서 만들고

// 두번째 시트에는 한국인으로 설정
// 랜덤한 한국사람 이름을 1천명 가져오고
// 고객이름, 나이(5~80), 사는 곳(지역별로)

const fs = require("fs");
const ExcelJS = require("exceljs");
const NameList = require("korean-name-generator");

const excel = new ExcelJS.Workbook();
const sheet = excel.addWorksheet("베라");
sheet.addRow(["아이스크림 이름", "칼로리", "성분"]);
const icecreamList = [
  ["민트초코", "654", "민트민트"],
  ["초코나무 숲", "454", "초코초코"],
  ["뉴욕 치즈케이크", "554", "치즈랑 뉴욕"],
  ["엄마는 외계인", "754", "아마도 외계인?"],
  ["슈팅스타", "354", "별"],
];

sheet.addRows(icecreamList);

const sheet1 = excel.addWorksheet("한국인들");

const place = [
  `경기도`,
  `강원도`,
  `충청도`,
  `전라도`,
  `경상도`,
  `제주도`,
  `서울`,
  `부산`,
];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 1000; i++) {
  sheet1.addRow([
    NameList.generate(),
    rand(5, 80),
    place[rand(0, place.length)],
  ]);
}

excel.xlsx.writeFile("quiz.xlsx");
