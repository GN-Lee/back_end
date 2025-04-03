const { Option } = require("./option.js");

class settlement extends Option {
  async excute(data) {
    console.log("오늘의 매출 ");
  }
}

module.exports = { settlement };
