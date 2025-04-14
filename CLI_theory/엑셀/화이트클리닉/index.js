const calender = {
  firstWeek: {},
  secondWeek: {},
  thirdWeek: {},
  fourthWeek: {},
  fifthWeek: {},
};

const exceljs = require("exceljs");

const workbook = new exceljs.Workbook();

workbook.xlsx.readFile("202503.xlsx").then(() => {
  const week = [];
  for (let i = 3; i <= 9; i++) {
    const sheet = workbook.getWorksheet(`${i}`);
    const newArr = [];
    sheet.eachRow((v) => {
      if (v.values.some((v) => v == "수당률")) {
        const cellArr = [];
        const { values } = v;
        findDriverRow(values, cellArr);
        const data = removeDup(cellArr);
        const obj = makeObject(data);
        newArr.push(obj);
      }
    });
    week.push(newArr.filter((v) => v.name.trim()));
  }
  const flatweek = week.flat();
  const agreegateData = flatweek.reduce((acc, cur) => {
    if (!acc[cur.name]) {
      acc[cur.name] = { ...cur };
    } else {
      acc[cur.name].income += cur.income;
      acc[cur.name].revenu += cur.revenu;
    }
    return acc;
  }, {});
  console.log(Object.values(agreegateData));
});

const findDriverRow = (values, cellArr) => {
  values.forEach((cell, index) => {
    if (index < 3) {
      return;
    } else if (cell.richText) {
      const plainText = cell.richText.map((seg) => seg.text).join("");
      cellArr.push(plainText);
    } else {
      cellArr.push(cell);
    }
  });
};
const removeDup = (cellArr) => [...new Set(cellArr)];
const makeObject = (data) => ({
  name: data[0],
  rate: data[2],
  revenu: data[3].result || 0,
  income: data[2] * (data[3].result || 0),
});
