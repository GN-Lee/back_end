const { Option } = require("./option.js");

class sellOption extends Option {
  async excute(data) {
    console.log("판매");
  }
}

module.exports = { sellOption };
