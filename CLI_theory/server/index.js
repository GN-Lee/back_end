const http = require("http");

const s1 = http.createServer((req, res) => {
  req.res.setHeader(`Content-Type`, `text/plain; charset=utf-8`);
  res.end(`공지사항: 수업시간 외에 로밍 그만하기`);
});

s1.listen(3000, `localhost`, () => {
  console.log(`서버 시작!`);
});

const s2 = http.createServer((req, res) => {
  res.setHeader(`Content-Type`, `application/json; charset=utf-8`);
  const data = { name: "현서팡", age: 25, hobbies: ["여울", "지각"] };
  res.end(JSON.stringify(data));
});

s2.listen(3003, `localhost`, () => {
  console.log("현서팡핑팡퐁");
});

const s3 = http.createServer((req, res) => {
  res.setHeader(`Content-Type`, `text/plain; charset=utf-8`);
  if (req.url === "/coffee") {
    res.end("여울커피");
  } else {
    res.end("현서팡팡");
  }
});
s3.listen(3004, `localhost`, () => {
  console.log("S3 서버 따까리 시작");
});
