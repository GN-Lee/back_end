const { Option } = require("./option.js");

class outOption extends Option {
  async excute(data) {
    console.log("끝 집에가");
    process.exit(0);
  }
}

module.exports = { outOption };
