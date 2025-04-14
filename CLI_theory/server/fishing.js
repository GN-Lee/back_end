const http = require("http");

const s2 = http.createServer((req, res) => {
  res.setHeader(`Content-Type`, `text/html; charset=utf-8`);
  res.end(`<h1 style='color:purple'>안녕하세요 피싱사이트입니다.</h1>`);
});

s2.listen(3001, `localhost`, () => {
  console.log("서버 가동!");
});
