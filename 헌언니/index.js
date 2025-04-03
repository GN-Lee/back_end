const kr = require("korean-name-generator");
const { createObjectCsvWriter } = require("csv-writer");

const csvWriter = createObjectCsvWriter({
  path: "user.csv",
  header: [
    { id: "id", title: "id" },
    { id: "name", title: "scored_name" },
    { id: "score", title: "scored" },
  ],
});

const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 3,
  name: kr.generate(i % 2),
  score: i % 5,
}));

csvWriter.writeRecords(data).then(() => {
  console.log("complete");
});
