const { sellOption } = require("./sell.js");
const { replacement } = require("./replace.js");
const { settlement } = require("./settle.js");
const { outOption } = require("./exit.js");
const { managers } = require("../manager/base.js");

const menuOption = {
  1: new sellOption(),
  2: new replacement(managers.inventory, managers.prompt, managers.data),
  3: new settlement(),
  4: new outOption(),
};

module.exports = { menuOption };
