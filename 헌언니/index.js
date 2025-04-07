const kr = require("korean-name-generator");
const { createObjectCsvWriter } = require("csv-writer");
const { courses } = require("./data.js");

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// 인문대[10%] 사과대[25%] 자연대[25%] 공과대[30%] 예체능[10%]
// 2.5*4  |  6.25*4  |  8.3*3  |  10*3  |  3.3*3
const getMajor = () => {
  const r = Math.random(); // 0~1
  // 인문대
  if (r < 0.025) return 1;
  else if (r <= 0.05) return 2;
  else if (r <= 0.075) return 3;
  else if (r <= 0.1) return 4;
  // 사과대
  else if (r <= 0.1625) return 5;
  else if (r <= 0.225) return 6;
  else if (r <= 0.2875) return 7;
  else if (r <= 0.35) return 8;
  // 자연대
  else if (r <= 0.43) return 9;
  else if (r <= 0.51) return 10;
  else if (r <= 0.59) return 11;
  // 공과대
  else if (r <= 0.69) return 12;
  else if (r <= 0.79) return 13;
  else if (r <= 0.89) return 14;
  // 예체능
  else if (r <= 92) return 15;
  else if (r <= 95) return 16;
  else return 17;
};

const csvWriter = createObjectCsvWriter({
  path: "enrollments.csv",
  header: [
    { id: "id", title: "id" },
    { id: "course_id", title: "course_id" },
    { id: "student_id", title: "student_id" },
  ],
});

const data = Array(100)
  .fill(0)
  .map((v, i) => {
    return {
      id: i,
      course_id: getMajor(1, 100),
      student_id: getRandom(1, 10000),
    };
  });

csvWriter.writeRecords(data).then(() => {
  console.log("complete");
});
