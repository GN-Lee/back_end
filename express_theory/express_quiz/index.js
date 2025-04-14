fetch("http://localhost:3000/boardgame", {
  method: "POST",
  headers: {
    "Content-Type": "text/plain",
  },
  body: "블리치",
})
  .then((v) => v.json())
  .then((v) => console.log(v));
