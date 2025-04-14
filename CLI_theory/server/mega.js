const http = require("http");

const s1 = http.createServer((req, res) => {
  if (req.url === "/coffee") {
    res.setHeader(`Content-Type`, `application/json; charset=utf-8`);
    res.end(JSON.stringify({ cofee: ["아메리카노", "카페모카", "민트초코"] }));
  } else if (req.url === "/cookie") {
    res.setHeader(`Content-Type`, `text/html; charset=utf-8`);
    res.end(`<h1 style="color:green">민초쿠키</h1>`);
  } else {
    res.setHeader(`Content-Type`, `text/html; charset=utf-8`);
    res.end(`<h1>메가커피 이랏샤이마세잇!</h1>`);
  }
});

s1.listen(3000, `localhost`, () => {
  console.log("이꾸요잇");
});
