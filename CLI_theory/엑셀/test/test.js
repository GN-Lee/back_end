const fs = require("fs");
const ExcelJS = require("exceljs");
const Workbook = new ExcelJS.Workbook();

Workbook.xlsx.readFile("quiz.xlsx").then(() => {
  const sheetZero = Workbook.getWorksheet(1);
  sheetZero.eachRow((v, i) => {
    console.log(`${v.values}`);
  });
});
